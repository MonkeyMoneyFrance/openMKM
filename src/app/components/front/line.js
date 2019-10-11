import React , { useState, useEffect } from 'react';
import EditElements from '../buttons/editorElement'
import {  useSelector , useDispatch } from "react-redux";
import { useDrop , useDrag} from 'react-dnd'
import Column from './column'
import DragLine from '../drag/lineDrag'
import styled from 'styled-components'
import DropColumn from '../drop/dropColumn'
import {requestFetchUser,updatePage,setEditedItem,setEditorForm,resetEditorForm,setPanel} from '../../redux/actions';
import dotProp from 'dot-prop-immutable'


const LineFront = styled.div`
  ${props => Object.keys(props.styles||[]).reduce((hover,key) => key.indexOf('Hover') == -1  ? `${hover}${key}:${props.styles[key]};` : hover,"")};
  &:hover {
    ${props => Object.keys(props.styles||[]).reduce((hover,key) => key.indexOf('Hover') > -1 ? `${hover} ${key.replace('Hover','')}:${props.styles[key]};` : hover,"")}
  }
  display:flex;
  flex:${props => props.flex || 1};

`
/*

*/
function Line({setEdition,droppedItem,line,index,path,isEditing}) {


  return(
    <LineFront
      styles = {line.style}
      className={"line"+ (isEditing ? " lineEditing" : "")}
      >

      {isEditing && <DragLine type={'line'} path={`${path}.${index}`} />}
      <div className={'snippedEditorContainer lineSnippet'}>
        <EditElements
          path={path}
          index={index}
          subProps={'style'}
          panel={'editLine'}
          droppedItem={droppedItem}
          itemEdition={setEdition}
          />

      </div>

      <DropColumn
        path={`${path}.${index}.columns`}
        droppedItem={droppedItem}
        isEditing={isEditing}
        index={0}
      />
      {line.columns.map((column,k)=>{
        return(
          <React.Fragment key={k}>
            <Column
              path={`${path}.${index}.columns`}
              index={k}
              column={column}
              droppedItem={droppedItem}
              isEditing={isEditing}
              setEdition={setEdition}
              />
            <DropColumn
              droppedItem={droppedItem}
              path={`${path}.${index}.columns`}
              isEditing={isEditing}
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
