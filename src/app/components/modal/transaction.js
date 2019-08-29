import React , {useState} from 'react'
import {Content,Button,Input,Main} from './styles'
import {bindActionCreators} from 'redux'
import Generic from '../forms/generic'
import PropTypes from 'prop-types'
import {addTransaction} from '../../redux/actions'
import {connect} from 'react-redux'

const matchDispatchToProps = (dispatch) =>  bindActionCreators({addTransaction},dispatch)

function TransactionModal(props){
  const onSubmit = (form) => {
    props.addTransaction(form)
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
export default connect(null,matchDispatchToProps)(TransactionModal);
