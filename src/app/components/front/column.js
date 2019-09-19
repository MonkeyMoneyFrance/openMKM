import React, {useState} from 'react'
import { useDrop } from 'react-dnd'
import Button from './button';
import Paragraph from './paragraph';
import Image from './image';
import DropZone from '../drop/dropColumn'
import { useDispatch , useSelector } from "react-redux";

const Forker = {
  paragraph : Paragraph, //or ParagraphEditor ?
  button : Button,
  image: Image,
};
//


function Column({column,i,j,k,addItem,setEdition}){

  const [{canDropColumn,isOverColumn}, dropColumn] = useDrop({
    accept: ["button","text"],
    drop: () => ({ name: 'Dustbin' }),
    collect: monitor => ({
      isOverColumn: monitor.isOver(),
      canDropColumn: monitor.canDrop(),
    }),
  })

  const droppedItem = (item,index) => addItem({item,index,i,j,k})
  const isEditing = useSelector(state => state.editor.isEditing);
  const editingPath = useSelector(state => state.editor.path);
  const editingPanel = useSelector(state => state.editor.panel[1]);
  const editingForm = useSelector(state => state.editor.form);
  const overColumn = canDropColumn && isOverColumn
  const itemWasClicked = (path,type,subProps) => isEditing ? setEdition(path,type,subProps) : void 0

  return (
    <div
      ref={dropColumn} key={`${i}.${j}.${k}`} className={"column"+ (isEditing ? " columnEditing" : "")}
      style={{...column.style}}
    >
    <div className={'snippedEditorContainer columnSnippet'}>
      <div
        onClick={()=>itemWasClicked(`blocks.${i}.lines.${j}.columns.${k}`,'editColumn','styles')}
        className={'default'}>O</div>
        <div>ADD</div>
        <div>COPY</div>
        <div>MOVE</div>
        <div>DELETE</div>
    </div>
    <DropZone
      droppedItem={droppedItem}
      overColumn={overColumn}
      index={0}
    />
    {column.elements.map((element,l)=>{
      const Component = Forker[element.type];
      const elementProps = isEditing && editingPath == `blocks.${i}.lines.${j}.columns.${k}.elements.${l}` && editingPanel == 'props' ? editingForm : element.props
      const elementStyles = isEditing && editingPath == `blocks.${i}.lines.${j}.columns.${k}.elements.${l}` && editingPanel == 'styles' ? editingForm : element.styles

      return(
        <div key={`${i}.${j}.${k}.${l}`}>
          <div className={"element"+ (isEditing ? " elementEditing" : "")}
          style={{...element.style}} onClick={()=>console.log(`element ${i}.${j}.${k}.${l} clicked`)}
          >
          <div className={'snippedEditorContainer elementSnippet'}>
            <div
              onClick={()=>itemWasClicked(`blocks.${i}.lines.${j}.columns.${k}.elements.${l}`,'editElement','props')}
              className={'default'}>O</div>
              <div>ADD</div>
              <div>COPY</div>
              <div>MOVE</div>
              <div>DELETE</div>
          </div>
            <Component
              {...elementProps}
              styles = {elementStyles}
            />
          </div>
          <DropZone
            droppedItem={droppedItem}
            overColumn={overColumn}
            index={l+1}
          />
        </div>

      )
    }
    )}
    </div>
  )
}
export default Column
