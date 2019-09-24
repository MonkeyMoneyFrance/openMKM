import React from 'react'
import { useDrop } from 'react-dnd'


const DropLine = ({ path , index , droppedItem,isEditing}) => {

  const [{canDropItem,isOverItem}, dropLine] = useDrop({
    accept : ["line"],
    drop: (item) =>  droppedItem(item,path,index),
    canDrop:(item,monitor) => isEditing && ( !item.path || (item.path.split('.')[0] == path.split('.')[0] && item.path !== path+'.'+(index-1) && item.path !== path+'.'+(index))),
    collect: monitor => ({
      isOverItem: monitor.isOver(),
      canDropItem: monitor.canDrop(),
    }),
  })
  const isActive = isOverItem && canDropItem
  if (!canDropItem) return null
  return(
    <div
      ref={dropLine}
      style={{transition:"all 200ms ease-in",height:isActive ? 150 : 100,width:"100%",backgroundColor:canDropItem ? 'blue' : 'transparent'}}
      >
      {canDropItem && '+'}
    </div>
  )
}
export default DropLine
