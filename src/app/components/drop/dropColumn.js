import React from 'react'
import { useDrop } from 'react-dnd'


const DropColumn = ({ path , index , droppedItem,isEditing}) => {

  const [{canDropItem,isOverItem}, dropColumn] = useDrop({
    accept : ["column"],
    drop: (item) =>  droppedItem(item,path,index),
    canDrop:(item,monitor) => isEditing && (!item.path || (item.path.split('.')[0] == path.split('.')[0] && item.path !== path+'.'+(index-1) && item.path !== path+'.'+(index))),
    collect: monitor => ({
      isOverItem: monitor.isOver(),
      canDropItem: monitor.canDrop(),
    }),
  })
  const isActive = isOverItem && canDropItem
  if (!canDropItem) return null
  return(
    <div
      ref={dropColumn}
      style={{transition:"all 200ms ease-in",flex:isActive ? 1 : 0,height:"100%",backgroundColor:canDropItem ? 'blue' : 'transparent'}}
      >
      {canDropItem && '+'}
    </div>
  )
}
export default DropColumn
