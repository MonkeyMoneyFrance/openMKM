import React , {useState,useEffect} from 'react'
import forms from '../../config/forms'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {input,h2,h3,p,submit,autocomplete,datepicker} from '../inputs/index.js'
import dotProp from 'dot-prop'
import {connect} from 'react-redux'
import {setForm,resetForm} from '../../redux/actions'
const translate = {p,h2,h3,input,autocomplete,submit,datepicker}


const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({resetForm,setForm},dispatch)
}


function Generic(props){
  useEffect(()=>{
    props.resetForm({})
    props.setForm(injectProps())
  },[])
  const injectProps = () => {
    return ((forms.find(h => h.id === props.id) || {}).props||[]).reduce((obj,key)=> (
      {...obj,[key.split(':')[1]]:dotProp.get(props,key.split(':')[0])}
    ),{})
  }
  const submitForm = (form) => props.onSubmit(form);
  return (
    <form className={'form'}>
      {((forms.find(h => h.id === props.id) || {}).form||[]).map((line,i)=> (
        <div key={i} className='container wrap'>
          {line.map((e,j)=>{
            let Component = connect(
              (state) => {return {form : state.form}},
              (dispatch) => bindActionCreators({setForm},dispatch)
            )(translate[e.html])
            return(<Component key={j} {...e}  defaultValue={(props.initialData||{})[e.id]} onSubmit={submitForm} />)
          })}
          </div>
        )
      )}
    </form>
  )
}

export default withRouter(connect(null,matchDispatchToProps)(Generic));
