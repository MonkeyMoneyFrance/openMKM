import React , {useState,useEffect} from 'react'
import forms from '../../config/editor'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {input,h2,h3,p,submit,autocomplete,datepicker} from '../inputs/index.js'
import dotProp from 'dot-prop-immutable'
import {connect,useDispatch} from 'react-redux'
import {setEditorForm,resetEditorForm} from '../../redux/actions'
const translate = {p,h2,h3,input,autocomplete,submit,datepicker}


function Editor(props){
  const submitForm = (form) => props.onSubmit(form);
  const updatePage = () => props.updateForm()
  console.log(forms.find(h => h.id === props.id))
  return (
    <form className={'form'}>
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
    </form>
  )
}

export default withRouter(Editor);
