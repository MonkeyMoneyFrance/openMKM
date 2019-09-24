import React from 'react'
import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'rgba(0,0,0,0.1)',
  transform : 'rotate(180deg)',
  padding: '0.5rem 1rem',
  writingMode: 'vertical-lr',
  textAlign:'center',
  cursor: 'move',
}
const DragLine = ({ path , type}) => {
  const [{ isDragging }, drag] = useDrag({
    item: {  type , path},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style , opacity}}>
      Drag full line
    </div>
  )
}
export default DragLine
