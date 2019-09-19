import React from 'react'
import DragAndDropButton from '../drag/button'
const draggableItems = [
  {
    type:'button',
    name:"BOUTON"
  },
  {
    type:'text',
    name:"TEXTE"
  },
  {
    type:'underItem',
    name:"SOUS ITEM"
  },
  {
    type:'image',
    name:"IMAGE"
  }
]

function DragElement(){
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns: "auto auto"
      }}>
      {draggableItems.map(({name,type},index) => <DragAndDropButton key={index} type={type} name={name}/>)}
    </div>
  )
}
export default DragElement
