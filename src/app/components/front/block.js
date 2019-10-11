import React , { useState, useEffect } from 'react';
import EditElements from '../buttons/editorElement'
import {  useSelector , useDispatch } from "react-redux";
import Line from './line'
import DropLine from '../drop/dropLine'
import {setEdition,dropItem} from '../../redux/actions';


function Block({block,path,index}) {
  const dispatch = useDispatch();
  const isEditing = useSelector(state => state.editor.panelOpen && state.editor.editedContent == 'page');
  const setEditedItem = (path,type,subProps) => dispatch(setEdition({content:"page",path,type,subProps}))
  const droppedItem = (item,path,index,copy=false) => dispatch(dropItem({content:"page",item,path,index,copy}))


  return(
    <div name="block" className={"block"+ (isEditing ? " blockEditing" : "")}
      style={{...block.style}}
      >
      <DropLine
        path={`${path}.${index}.lines`}
        droppedItem={droppedItem}
        isEditing={isEditing}
        index={0}
      />
      {block.lines.map((line,j)=>
        <React.Fragment key={j}>
          <Line
            path={`${path}.${index}.lines`}
            index={j}
            line={line}
            droppedItem={droppedItem}
            setEdition={setEditedItem}
            isEditing={isEditing}
            />
          <DropLine
            path={`${path}.${index}.lines`}
            droppedItem={droppedItem}
            isEditing={isEditing}
            index={j+1}
          />
        </React.Fragment>
      )}
    </div>
  )
}
//export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Front))
export default Block
