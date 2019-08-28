import React , {useState} from 'react'
import {Content,Button,Input,Main} from './styles'
import {withRouter} from 'react-router-dom'
import Generic from '../forms/generic'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


function CotisationModal(props){
  const onSubmit = (form) => {
    props.setCotisation({
      userId:props.match.params.userId,
      _id : 'RANDOM',
      ...form
    })
    onClose()
  }
  const onClose = () => props.close()
  return(
  <Main>
    <div
      className={`background`}
      onClick={onClose}
    />
    <Content>
      <Generic id={'addTransaction'+props.name} onSubmit={onSubmit}/>
    </Content>

  </Main>
  )
}
export default withRouter(CotisationModal);
