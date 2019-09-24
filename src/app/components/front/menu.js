import React from 'react'
import DropLine from '../drop/dropLine'
import Line from './line'
import {dropItem, setEdition} from '../../redux/actions'
import { useDispatch , useSelector } from "react-redux";


function Menu({menu,isEditing}){
  const dispatch = useDispatch();
  const setEditedItem = (path,type,subProps) => dispatch(setEdition({content:"menu", path,type,subProps}))
  const droppedItem = (item,path,index,copy=false) => dispatch(dropItem({content:"menu",item,path,index,copy}))

  return (
    <div className={"block"+ (isEditing ? " blockEditing" : "")}
      style={{...menu.style}}
      >
      <DropLine
        path={`lines`}
        isEditing={isEditing}
        droppedItem={droppedItem}
        index={0}
      />
      {(menu.lines||[]).map((line,j)=>
        <React.Fragment key={j}>
          <Line
            path={`lines`}
            index={j}
            line={line}
            isEditing={isEditing}
            droppedItem={droppedItem}
            setEdition={setEditedItem}
            />
          <DropLine
            path={`lines`}
            isEditing={isEditing}
            droppedItem={droppedItem}
            index={j+1}
          />
        </React.Fragment>
      )}
    </div>
  )

}
export default Menu;
