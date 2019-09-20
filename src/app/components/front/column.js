import React, {useState} from 'react'
import { useDrop , useDrag} from 'react-dnd'
import EditElements from '../buttons/editorElement'
import Element from './element'
import Button from './button';
import Paragraph from './paragraph';
import Image from './image';
import DropElement from '../drop/dropElement'
import DropColumn from '../drop/dropColumn'
import { useDispatch , useSelector } from "react-redux";


const Forker = {
  paragraph : Paragraph, //or ParagraphEditor ?
  button : Button,
  image: Image,
};
//


function Column({column,i,j,k,droppedItem,setEdition}){
  const isEditing = useSelector(state => state.editor.isEditing);

  const [{overColumn}, dropColumn] = useDrop({
    accept : ["column","element","button","paragraph"],
    canDrag : () => isEditing,
    collect: monitor => ({
      overColumn: monitor.isOver(),
    }),
  })

  const [{ isDraggingColumn }, dragColumn] = useDrag({
    item: { type : 'column' , path : `blocks.${i}.lines.${j}.columns.${k}`},
    canDrag : () => isEditing,
    collect: monitor => ({
      isDraggingColumn: monitor.isDragging(),
    }),
  })


  // const droppedItem = (item,index) => addItem({item,index,i,j,k})
  const editingPath = useSelector(state => state.editor.path);
  const editingPanel = useSelector(state => state.editor.panel[1]);
  const editingForm = useSelector(state => state.editor.form);

  const itemWasClicked = (path,type,subProps) => isEditing ? setEdition(path,type,subProps) : void 0
  // const isSameColumn = pathColumn == `blocks.${i}.lines.${j}.columns.${k}`

  return (


    <div ref={dropColumn} style={{display:'flex',flex:1}}>
      <div
        ref={dragColumn}
        key={`${i}.${j}.${k}`} className={"column"+ (isEditing ? " columnEditing" : "")}
        style={{...column.style}}
      >

      <div className={'snippedEditorContainer columnSnippet'}>
      <EditElements
        path={`blocks.${i}.lines.${j}.columns`}
        index={k}
        subProps={'style'}
        panel={'editColumn'}
        droppedItem={droppedItem}
        itemEdition={itemWasClicked}
        />
    </div>
    <DropElement
      path={`blocks.${i}.lines.${j}.columns.${k}`}
      droppedItem={droppedItem}
      overColumn={overColumn}
      index={0}
    />
    {column.elements.map((element,l)=>{

      const elementProps = isEditing && editingPath == `blocks.${i}.lines.${j}.columns.${k}.elements.${l}` && editingPanel == 'props' ? editingForm : element.props
      const elementStyles = isEditing && editingPath == `blocks.${i}.lines.${j}.columns.${k}.elements.${l}` && editingPanel == 'styles' ? editingForm : element.styles

      return(
        <Element
            key={`${i}.${j}.${k}.${l}`}
            l={l}
            isEditing={isEditing}
            type={element.type}
            overColumn={overColumn}
            elementProps={elementProps}
            elementStyles={elementStyles}
            setEdition={itemWasClicked}
            droppedItem={droppedItem}
            path={`blocks.${i}.lines.${j}.columns.${k}`}
          />
      )
    }
    )}
    </div>
  </div>


  )
}
export default Column
