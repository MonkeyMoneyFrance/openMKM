import React from 'react'
import { useDrop } from 'react-dnd'


const DropElement = ({ path , overColumn, index , droppedItem}) => {

  const [{canDropItem,isOverItem}, dropItem] = useDrop({
    accept : ["button","element","column","paragraph"],
    drop: (item) =>  droppedItem(item,path+'.elements',index),
    canDrop:(item,monitor) => (item.path !== path+'.elements.'+(index-1) && item.path !== path+'.elements.'+(index)),
    collect: monitor => ({
      isOverItem: monitor.isOver(),
      canDropItem: monitor.canDrop(),
    }),
  })
  const isActive = canDropItem && isOverItem && overColumn

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
