import React from 'react'
import { useDrop } from 'react-dnd'


const DropLine = ({ path , index , droppedItem}) => {

  const [{canDropItem,isOverItem}, dropLine] = useDrop({
    accept : ["line"],
    drop: (item) =>  droppedItem(item,path+'.lines',index),
    canDrop:(item,monitor) => {
      return (item.path !== path+'.lines.'+(index-1) && item.path !== path+'.lines.'+(index))
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
      ref={dropLine}
      style={{transition:"all 200ms ease-in",flex:isActive ? 1 : 0,width:"100%",backgroundColor:canDropItem ? 'blue' : 'transparent'}}
      >
      {canDropItem && '+'}
    </div>
  )
}
export default DropLine
