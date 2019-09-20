import React from 'react'
import styled from 'styled-components'
import add from '../../assets/add-content.svg'
import edit from '../../assets/edit-content.svg'
import deleteContent from '../../assets/delete-content.svg'
import copy from '../../assets/copy-content.svg'
import SVG from 'react-inlinesvg';

const Icon = styled.div`
  cursor: pointer;
  margin:auto;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  & svg {
    width:13px;
  }
`

export default function editorElements({path,panel,subProps,itemEdition,droppedItem,index}){
  const editItem = () => itemEdition(`${path}.${index}`,panel,subProps)
  const copyItem = () => droppedItem({path:`${path}.${index}`},path,index+1,true)
  const deleteItem = () => droppedItem({path:`${path}.${index}`},path,index-1000)
  const addItem = () => panel == 'editColumn' ? droppedItem({type:'column',elements:[],style:{}},path,index) : panel == 'editLine' ? droppedItem({type:'line',columns:[],style:{}},path,index) : void 0
  return (
  <>
   <div className={'default'}><Icon onClick={editItem}><SVG src={edit} /></Icon></div>
   {(/editColumn|editLine/).test(panel) && <div><Icon><SVG src={add} onClick={addItem} /></Icon></div>}
   <div><Icon><SVG src={copy} onClick={copyItem} /></Icon></div>
   <div><Icon><SVG src={deleteContent} onClick={deleteItem} /></Icon></div>
  </>
)
}
