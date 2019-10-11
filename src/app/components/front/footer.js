import React from 'react'
import DropLine from '../drop/dropLine'
import Line from './line'
import {dropItem, setEdition} from '../../redux/actions'
import { useDispatch , useSelector } from "react-redux";


function Footer({footer}){
  const dispatch = useDispatch();
  const isEditing = useSelector(state => state.editor.panelOpen && state.editor.editedContent == 'footer');
  const setEditedItem = (path,type,subProps) => dispatch(setEdition({content:"footer", path,type,subProps}))
  const droppedItem = (item,path,index,copy=false) => dispatch(dropItem({content:"footer",item,path,index,copy}))

  return (
    <div className={"block"+ (isEditing ? " blockEditing" : "")}
      style={{...footer.style}}
      >
      <DropLine
        path={`lines`}
        isEditing={isEditing}
        droppedItem={droppedItem}
        index={0}
      />
      {(footer.lines||[]).map((line,j)=>
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
export default Footer;
