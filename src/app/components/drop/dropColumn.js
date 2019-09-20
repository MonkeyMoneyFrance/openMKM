import React from 'react'
import { useDrop } from 'react-dnd'


const DropColumn = ({ path , index , droppedItem}) => {

  const [{canDropItem,isOverItem}, dropColumn] = useDrop({
    accept : ["column"],
    drop: (item) =>  droppedItem(item,path+'.columns',index),
    canDrop:(item,monitor) => {
      return (item.path !== path+'.columns.'+(index-1) && item.path !== path+'.columns.'+(index))
    },
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
