import React, {useState} from 'react'
import { useDrop , useDrag} from 'react-dnd'
import EditElements from '../buttons/editorElement'
import Button from './button';
import Paragraph from './paragraph';
import Image from './image';
import DropElement from '../drop/dropElement'
import { useDispatch , useSelector } from "react-redux";


const Forker = {
  paragraph : Paragraph, //or ParagraphEditor ?
  button : Button,
  image: Image,
};
//


function Element(props){
  const {type,overColumn,elementProps,elementStyles,path,l,setEdition,droppedItem,isEditing} = props
  const itemWasClicked = (path,type,subProps) => setEdition(path,type,subProps)
  const [{ isDraggingItem }, dragItem] = useDrag({
    canDrag : () => isEditing,
    item: { type , path : `${path}.elements.${l}` }
  })
  const Component = Forker[type];
  return(
    <>
      <div
        ref={dragItem}
        className={"element"+ (isEditing ? " elementEditing" : "")}
        style={elementStyles}
      >
      <div className={'snippedEditorContainer elementSnippet'}>
        <EditElements
          path={`${path}.elements.${l}`}
          subProps={'props'}
          panel={'editElement'}
          itemEdition={itemWasClicked}
          />
      </div>
        <Component
          {...elementProps}
          styles = {elementStyles}
        />
      </div>
      <DropElement
        path={path}
        droppedItem={droppedItem}
        overColumn={overColumn}
        index={l+1}
      />
    </>


  )

}
export default Element
