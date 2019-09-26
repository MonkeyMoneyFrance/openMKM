import React , {useState,useEffect} from 'react'
import forms from '../../config/editor'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {input,h2,h3,p,submit,autocomplete,datepicker} from '../inputs/index.js'
import dotProp from 'dot-prop-immutable'
import {connect,useDispatch} from 'react-redux'
import {setEditorForm,resetEditorForm} from '../../redux/actions'
const translate = {p,h2,h3,input,autocomplete,submit,datepicker}
import styled from 'styled-components'

const Form = styled.form`
  display : flex;
  flex-direction : column;
  & input {
    border : 1px solid #d5dadf;
    margin : 2px;
    border-shadow : none;
    border-radius : 3px
  }
  & label {
    color : black;
    display: inline-block;
    width: 200px;
    text-align: left;
    padding-left : 20px;
  }

`

function Editor(props){
  const submitForm = (form) => props.onSubmit(form);
  const updatePage = () => props.updateForm()

  return (
    <Form >
      {((forms.find(h => h.id === props.id) || {})[props.subProps]||[]).map((line,i)=> (
        <div key={i} className='container wrap'>
          {line.map((e,j)=>{
            let Component = connect(
              (state) => {return {form : state.editor.form}},
              (dispatch) => bindActionCreators({setForm:setEditorForm},dispatch)
            )(translate[e.html])
            return(<Component key={j} {...e}
              onBlur={updatePage}
              defaultValue={(props.initialData||{})[e.id]}
              onSubmit={submitForm} />)
          })}
          </div>
        )
      )}
    </Form>
  )
}

export default withRouter(Editor);
