import React from 'react'
import PanelHeader from './panelHeader'
import DragAndDropButton from '../drag/button'
const draggableItems = [
  {
    type:'line',
    name:"Ligne",
    props:{type:'line',columns:[{type:'column',elements:[],style:{}}],style:{}}
  },
  {
    type:'column',
    name:"Colonne",
    props : {type:'column',elements:[],style:{}}
  },
  {
    type:'button',
    name:"BOUTON",
    props : {type:'button',props:{},style:{}}
  },
  {
    type:'text',
    name:"TEXTE",
    props : {type:'button',props:{},style:{}}
  },

  {
    type:'underItem',
    name:"SOUS ITEM",
    props:{}
  },
  {
    type:'image',
    name:"IMAGE",
    props:{}
  }
]

function DragElement(){
  return (
    <div>
      <PanelHeader name={"Ajout d'élément"} />
        <div style={{
          display:'grid',
          gridTemplateColumns: "auto auto"
          }}>
          {draggableItems.map(({name,type,props},index) => <DragAndDropButton key={index} props={props} type={type} name={name}/>)}
        </div>
    </div>

  )
}
export default DragElement
