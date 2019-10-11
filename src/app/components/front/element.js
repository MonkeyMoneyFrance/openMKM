import React, {useState} from 'react'
import { useDrop , useDrag} from 'react-dnd'
import EditElements from '../buttons/editorElement'
import Button from './button';
import Column from './column';
import Paragraph from './paragraph';
import Image from './image';
import DropElement from '../drop/dropElement'
import { useDispatch , useSelector } from "react-redux";


const Forker = {
  paragraph : Paragraph, //or ParagraphEditor ?
  button : Button,
  image: Image
};



function Element(props){
  const {type,overColumn,elementProps,elementStyles,path,index,setEdition,droppedItem,isEditing} = props
  const itemWasClicked = (path,type,subProps) => setEdition(path,type,subProps)
  const [{ isDraggingItem }, dragItem] = useDrag({
    canDrag : () => isEditing,
    item: { type , path : `${path}.${index}` }
  })

  const Component = Forker[type];
  return(
    <>
      <div
        ref={dragItem}
        className={"element"+ (isEditing ? " elementEditing" : "")}
      >
      <div className={'snippedEditorContainer elementSnippet'}>
        <EditElements
          path={`${path}`}
          index={index}
          subProps={'props'}
          panel={'editElement'}
          droppedItem={droppedItem}
          itemEdition={itemWasClicked}
          />
      </div>
        <Component

           {...elementProps} styles = {elementStyles}/>
      </div>
      <DropElement
        path={`${path}`}
        droppedItem={droppedItem}
        overColumn={overColumn}
        isEditing={isEditing}
        index={index+1}
      />
    </>


  )

}
export default Element
