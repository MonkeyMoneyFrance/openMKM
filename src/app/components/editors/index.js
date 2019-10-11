import React, {useState} from 'react'
import {setPanelOpen,toggleEditor} from '../../redux/actions'
import DragElement from './dragElement'
import EditElement from './EditElement'
import BottomBar from './bottomBar'
import MainPanel from './mainPanel'
import ManageMenu from './manageMenu'
import styled from 'styled-components';
import sortUp from '../../assets/sort-up.svg'
import settings from '../../assets/settings.svg'
import SVG from 'react-inlinesvg';
import {  useSelector , useDispatch } from "react-redux";

const getPanel = {
  dragElement:DragElement,
  editElement:EditElement,
  editColumn:EditElement,
  editLine:EditElement,
  main:MainPanel,
  manageMenu:ManageMenu
}
const SwitchButton = styled.div`
    z-index: 150;
    transition: all 300ms ease-in 0s;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor : pointer;
    background-color : #F7F7F7;
    &:hover {
      background-color : #cccccc;
      box-shadow: 2px 0px 5px 0px rgba(204,204,204,1);
    };
    & svg {
      transform: ${props => props.isEditing ? "rotate(-90deg);" : "rotate(90deg);"};
      width : 10px;
    }

    top: 500px;
    left : ${props => props.isEditing ? "500px" : "0px"};
    width: 25px;
    height: 50px;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 2px 0px 5px 0px rgba(204,204,204,0.56);
`
function MainEditor({page,menu,footer}){
  const isEditing = useSelector(state => state.editor.isEditing);
  const panelOpen = useSelector(state => state.editor.panelOpen);
  const panel = useSelector(state => state.editor.panel);
  const dispatch = useDispatch();
  const toggle = () => {
    if (isEditing) dispatch(setPanelOpen(!panelOpen))
    else {
      dispatch(toggleEditor({page,menu,footer}))
      dispatch(setPanelOpen(!panelOpen))
    }
  }
  // const toggle = () => dispatch(toggleEditor({page,menu,footer}))
  const Panel = getPanel[panel[0]]
  return(
    <>
    <div style={{
      transition:"300ms all ease-in",
      position:'relative',
      overflow:'auto',
      height:"100vh",
      width:panelOpen ? 500 : 0, borderRight:"1px solid"}}>
      <Panel />
      <BottomBar >Barre du Bas</BottomBar>
    </div>
    <SwitchButton
      isEditing={panelOpen}
      onClick={toggle}
    ><SVG src={isEditing ? sortUp : settings} /></SwitchButton>

    </>

  )
}
export default MainEditor
