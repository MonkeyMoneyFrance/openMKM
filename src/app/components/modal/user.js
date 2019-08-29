import React , {useState} from 'react'
import {Content,Button,Input,Main} from './styles'
import Generic from '../forms/generic'
import {addUser} from '../../redux/actions'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const matchDispatchToProps = (dispatch) => bindActionCreators({addUser},dispatch)


function UserModal(props){
  const onSubmit = (form) => {
    props.addUser(form)
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
        <Generic id={'addUser'} onSubmit={onSubmit}/>
      </Content>

    </Main>
  )
}
export default connect(null,matchDispatchToProps)(UserModal);
