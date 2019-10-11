import React , {useState,useEffect} from 'react'
import forms from '../../config/editor'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {input,h2,h3,p,submit,switchHeader,autocomplete,datepicker} from '../inputs/index.js'
import {connect,useSelector,useDispatch} from 'react-redux'
import {setEditorForm,resetEditorForm,setEditorFormProps} from '../../redux/actions'
const translate = {switchHeader,p,h2,h3,input,autocomplete,submit,datepicker}
import styled from 'styled-components'
const Container = styled.div`
  padding:0.5em;
  justify-content:space-between;
  display:flex;
  width:100%;
  align-items:center;
`
const Form = styled.form`
  display : flex;
  flex-direction : column;
  height:calc(100vh - 200px);
  overflow:auto;
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

function Editor({onSubmit,updateForm,form,initialData={}}){
  const submitForm = (form) => onSubmit(form);
  const updatePage = () => updateForm()
  const [headerSwitchs , setHeaderSwitchs] = useState({})
  const propsForm = useSelector(state => state.editor.formProps||{});

  const shouldShow = (e) => (e.switch||[]).reduce((bool,s) => bool && (s.split(':')[0] && propsForm[s.split(':')[0]] &&  s.split(':')[1] == propsForm[s.split(':')[0]]), true)
  const updateSwitchHeader = (switchHeader) => setHeaderSwitchs({...headerSwitchs,...switchHeader})

  return (
    <Form className={'form'}>
      {form.map((line,i)=> (
        <div key={i} className='container wrap' style={{justifyContent:'space-between'}}>
          {line.map((e,j)=>{
            if (!shouldShow(e)) return null
            let Component = connect(
              (state) => {return {form : state.editor.form,propsForm : state.editor.formProps}},
              (dispatch) => bindActionCreators({setForm:setEditorForm,setFormProps:setEditorFormProps},dispatch)
            )(translate[e.html])
            return(
              <Container key={e.id} >
                <Component
                  {...e}
                  onBlur={updatePage}
                  defaultValue={initialData[e.id]}
                  onSubmit={submitForm} />
              </Container>
            )
          })}
          </div>
        )
      )}
    </Form>
  )
}

export default withRouter(Editor);
