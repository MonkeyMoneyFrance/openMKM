import React , {useState} from 'react'
import {Content,Button,Input,Main} from './styles'
import Generic from '../forms/generic'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {editUser} from '../../redux/actions'
import {connect} from 'react-redux'

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({editUser},dispatch)
}

function EditUserModal(props){
  const onSubmit = (form) => {
    props.editUser({...form})
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
      <Generic id={'editUser'} onSubmit={onSubmit} initialData={props.initialData} />
    </Content>

  </Main>
  )
}
export default connect(null,matchDispatchToProps)(EditUserModal);
