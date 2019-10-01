import React, {useState} from 'react'
import { useDrop , useDrag} from 'react-dnd'
import EditElements from '../buttons/editorElement'
import Element from './element'
import styled from 'styled-components'
import DropElement from '../drop/dropElement'
import DropColumn from '../drop/dropColumn'
import { useDispatch , useSelector } from "react-redux";

const ColumnFront = styled.div`
  background : ${props => props["background"]};
  margin : ${props => props["margin"]};
  padding : ${props => props["padding"]};
  display:flex;
  flex:${props => props.flex || 1};

`


function Column({column,path,index,droppedItem,setEdition,isEditing}){


  const [{overColumn}, dropColumn] = useDrop({
    accept : ["column","element","button","paragraph"],
    canDrop : () => isEditing,
    collect: monitor => ({
      overColumn: monitor.isOver(),
    }),
  })

  const [{ isDraggingColumn }, dragColumn] = useDrag({
    item: { type : 'column' , path : `${path}.${index}`},
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

  return (


  <ColumnFront
    className={"column"+ (isEditing ? " columnEditing" : "")}
    ref={dragColumn}
    {...column.style}>

    <div className={'snippedEditorContainer columnSnippet'}>
      <EditElements
        path={path}
        index={index}
        subProps={'style'}
        panel={'editColumn'}
        droppedItem={droppedItem}
        itemEdition={itemWasClicked}
        />
    </div>
    <div style={{width:'100%',height:'100%'}} ref={dropColumn}>
    <DropElement
      path={`${path}.${index}.elements`}
      droppedItem={droppedItem}
      isEditing={isEditing}
      overColumn={overColumn}
      index={0}
    />
    {column.elements.map((element,l)=>{

      const elementProps = isEditing && editingPath == `${path}.${index}.elements.${l}` && editingPanel == 'props' ? editingForm : element.props
      const elementStyles = isEditing && editingPath == `${path}.${index}.elements.${l}` && editingPanel == 'styles' ? editingForm : element.style

      return(
        <Element
            key={l}
            isEditing={isEditing}
            type={element.type}
            overColumn={overColumn}
            elementProps={elementProps}
            elementStyles={elementStyles}
            setEdition={itemWasClicked}
            droppedItem={droppedItem}
            path={`${path}.${index}.elements`}
            index={l}
          />
      )
    }
    )}
    </div>

  </ColumnFront>



  )
}
export default Column
