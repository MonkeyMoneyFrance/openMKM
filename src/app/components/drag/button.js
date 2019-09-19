import React from 'react'
import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  margin : '0.5em',
  cursor: 'move',
  float: 'left',
}
const Box = ({ name , type}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  )
}
export default Box
