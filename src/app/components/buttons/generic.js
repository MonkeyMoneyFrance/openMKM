import React from 'react'
import buttons from '../../config/buttons'
import {bindActionCreators} from 'redux'
import {input,h2,h3,p,submit} from '../inputs/index.js'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setForm,resetForm} from '../../redux/actions'


function matchDispatchToProps(dispatch){
  return bindActionCreators({resetForm},dispatch)
}

const Button = styled.button`
  padding:1em;
  margin:0.5em;
  cursor:pointer;
  background-color: blue;
  &.warning {
    background-color: yellow;
  }
`


function Generic(props){

  const onClick = (e) => props.onClick(e.target.name);
  return (
    <div className={'container wrap'}>
      {((buttons.find(h => h.id === props.id) || {}).button||[]).map((b,i)=> (
        b.accessLevel < 10 && <Button key={i} name={b.path} className={b.className} onClick={onClick} >{b.label}</Button>
        )
      )}
    </div>
  )
}

export default connect(null,matchDispatchToProps)(Generic);
