import React , {useState,useEffect} from 'react'
import forms from '../../config/forms'
import {bindActionCreators} from 'redux'
import {input,h2,h3,p} from '../inputs/index.js'

import {connect} from 'react-redux'
import {setForm,resetForm} from '../../redux/actions'

const translate = {p,h2,h3,input}

function mapStateToProps(state,props){
  return {
    form : state.form
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({setForm,resetForm},dispatch)
}

function Generic(props){
  useEffect(()=>props.resetForm(),[])
  return (
    <form className={'form'}>
      {((forms.find(h => h.id === props.id) || {}).form||[]).map((line,i)=> (
        <div key={i} className='container wrap'>
          {line.map((e,j)=>{
            let Component = connect(mapStateToProps,matchDispatchToProps)(translate[e.html])
            return(<Component key={j} {...e}/>)
          })}
          </div>
        )
      )}
    </form>
  )
}

export default connect(null,matchDispatchToProps)(Generic);
