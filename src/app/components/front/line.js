import React , { useState, useEffect } from 'react';
import EditElements from '../buttons/editorElement'
import {  useSelector , useDispatch } from "react-redux";
import { useDrop , useDrag} from 'react-dnd'
import Column from './column'
import styled from 'styled-components'
import DropColumn from '../drop/dropColumn'
import {requestFetchUser,updatePage,setEditedItem,setEditorForm,resetEditorForm,setPanel} from '../../redux/actions';
import dotProp from 'dot-prop-immutable'


const LineFront = styled.div`
  background : ${props => props["background"]};
  margin : ${props => props["margin"]};
  padding : ${props => props["padding"]};
  display:flex;
  flex:${props => props.flex || 1};

`

function Line({setEdition,droppedItem,line,i,j}) {
  const isEditing = useSelector(state => state.editor.isEditing);
  const [{ isDraggingLine }, dragColumn] = useDrag({
    item: { type : 'line' , path : `blocks.${i}.lines.${j}`},
    canDrag : () => isEditing,
    collect: monitor => ({
      isDraggingLine: monitor.isDragging(),
    }),
  })

  return(
    <LineFront
      {...line.style}
      ref={dragColumn}
      className={"line"+ (isEditing ? " lineEditing" : "")}
      >
      <div className={'snippedEditorContainer lineSnippet'}>
        <EditElements
          path={`blocks.${i}.lines`}
          index={j}
          subProps={'style'}
          panel={'editLine'}
          droppedItem={droppedItem}
          itemEdition={setEdition}
          />
      </div>
      <DropColumn
        path={`blocks.${i}.lines.${j}`}
        droppedItem={droppedItem}
        index={0}
      />
      {line.columns.map((column,k)=>{
        return(
          <React.Fragment key={k}>
            <Column
              i={i}
              j={j}
              k={k}
              column={column}
              droppedItem={droppedItem}
              setEdition={setEdition}
              />
            <DropColumn
              droppedItem={droppedItem}
              path={`blocks.${i}.lines.${j}`}
              index={k+1}
            />
          </React.Fragment>

        )
      }
      )}
    </LineFront>
  )
}
//export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Front))
export default Line
