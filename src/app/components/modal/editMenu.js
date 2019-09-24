import React , {useState} from 'react'
import {Content,Button,Input,Main} from './styles'
import Generic from '../forms/generic'
import PropTypes from 'prop-types'


function EditMenuModal({chosenMenu,initialData,close,editMenu}){
  const onSubmit = (form) => {
    editMenu(chosenMenu , {...form})
    onClose()
  }
  const onClose = () => close()
  return(
  <Main>
    <div
      className={`background`}
      onClick={onClose}
    />
    <Content>
      <Generic id={'editMenu'} onSubmit={onSubmit} initialData={initialData} />
    </Content>

  </Main>
  )
}
export default EditMenuModal;
