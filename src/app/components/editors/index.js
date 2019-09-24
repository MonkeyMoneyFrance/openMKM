import React, {useState} from 'react'
import {toggleEditor} from '../../redux/actions'
import DragElement from './dragElement'
import EditElement from './EditElement'
import MainPanel from './mainPanel'
import ManageMenu from './manageMenu'
import {  useSelector , useDispatch } from "react-redux";

const getPanel = {
  dragElement:DragElement,
  editElement:EditElement,
  editColumn:EditElement,
  editLine:EditElement,
  main:MainPanel,
  manageMenu:ManageMenu
}

function MainEditor({page,menu,footer}){
  const isEditing = useSelector(state => state.editor.isEditing);
  const panel = useSelector(state => state.editor.panel);
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleEditor({page,menu,footer}))
  const Panel = getPanel[panel[0]]
  return(
    <>
    <div style={{
      transition:"300ms all ease-in",
      width:isEditing ? 500 : 0, borderRight:"1px solid"}}>
      <Panel />
    </div>
    <button
      style={{
        zIndex:150,
        transition:"300ms all ease-in",
        position:"absolute", top:500,left:isEditing ? 500 : 0
      }}
      onClick={toggle}
      >OPEN</button>
    </>

  )
}
export default MainEditor
