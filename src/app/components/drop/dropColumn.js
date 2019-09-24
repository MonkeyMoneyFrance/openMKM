import React from 'react'
import { useDrop } from 'react-dnd'


const DropZone = ({ overColumn , index , droppedItem}) => {
  const [{canDropItem,isOverItem}, dropItem] = useDrop({
    accept: ["button","text"],
    drop: (item) =>  droppedItem(item,index),
    collect: monitor => ({
      isOverItem: monitor.isOver(),
      canDropItem: monitor.canDrop(),
    }),
  })
  const isActive = canDropItem && isOverItem
  return(
    <div
      ref={dropItem}
      className={"element"}
      style={{transition:"all 200ms ease-in",padding:isActive ? "1em 0" : "0",width:"100%",backgroundColor:overColumn ? 'blue' : 'transparent'}}
      >
      {overColumn && 'DROP HERE TO ADD THE ITEM'}
    </div>
  )
}
export default DropZone
