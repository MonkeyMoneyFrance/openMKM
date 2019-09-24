import React from 'react'
import { useDrop } from 'react-dnd'


const DropElement = ({ path , overColumn, index , droppedItem,isEditing}) => {

  const [{canDropItem,isOverItem}, dropItem] = useDrop({
    accept : ["button","element","paragraph"],
    drop: (item) =>  droppedItem(item,path,index),
    canDrop:(item,monitor) => isEditing && ( !item.path || (item.path.split('.')[0] == path.split('.')[0] && item.path !== path+'.'+(index-1) && item.path !== path+'.'+(index))),
    collect: monitor => ({
      isOverItem: monitor.isOver(),
      canDropItem: monitor.canDrop(),
    }),
  })

  const isActive = canDropItem && isOverItem && overColumn
  //

  return(
    <div
      ref={dropItem}
      className={"element"}
      style={{transition:"all 200ms ease-in",
        padding:isActive ? "1em 0" : "0",width:"100%",backgroundColor:canDropItem ? 'blue' : 'transparent'}}
      >
      {canDropItem && overColumn && 'DROP HERE TO ADD THE ITEM'}
    </div>
  )
}
export default DropElement
