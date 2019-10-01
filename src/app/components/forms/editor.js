import React , {useState,useEffect} from 'react'
import forms from '../../config/editor'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {input,h2,h3,p,submit,switchHeader,autocomplete,datepicker} from '../inputs/index.js'
import {connect,useSelector,useDispatch} from 'react-redux'
import {setEditorForm,resetEditorForm,setEditorFormProps} from '../../redux/actions'
const translate = {switchHeader,p,h2,h3,input,autocomplete,submit,datepicker}


function Editor(props){
  const submitForm = (form) => props.onSubmit(form);
  const updatePage = () => props.updateForm()
  const [headerSwitchs , setHeaderSwitchs] = useState({})
  const propsForm = useSelector(state => state.editor.formProps||{});

  const form = ((forms.find(h => h.id === props.id) || {})[props.subProps]||[])

  // useEffect(()=>{
  //     let headerSwitchs = {}
  //     form.map(line => line.map(el => el.html == 'switchHeader' ? headerSwitchs[el.id] = 'default' : void 0))
  //     setHeaderSwitchs(headerSwitchs)
  //
  // },[])
  const shouldShow = (e) => (e.switch||[]).reduce((bool,s) => bool && (s.split(':')[0] && propsForm[s.split(':')[0]] &&  s.split(':')[1] == propsForm[s.split(':')[0]]), true)
  const updateSwitchHeader = (switchHeader) => setHeaderSwitchs({...headerSwitchs,...switchHeader})


  return (
    <form className={'form'}>
      {form.map((line,i)=> (
        <div key={i} className='container wrap' style={{justifyContent:'space-between'}}>
          {line.map((e,j)=>{
            if (!shouldShow(e)) return null
            let Component = connect(
              (state) => {return {form : state.editor.form,propsForm : state.editor.formProps}},
              (dispatch) => bindActionCreators({setForm:setEditorForm,setFormProps:setEditorFormProps},dispatch)
            )(translate[e.html])
            return(<Component
              key={e.id}
              {...e}
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
