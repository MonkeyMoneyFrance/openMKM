import React from 'react'
import PanelHeader from './panelHeader'
import {setPanel,setEditedContent,pushHistoryPanel} from '../../redux/actions'
import {useDispatch,useSelector} from 'react-redux'
const items = [
  {
    name:"Ajouter une page"
  },
  {
    name:"Editer le menu",
    panel : 'manageMenu',
    content : "menu"
  },
  {
    name:"Editer le footer",
    panel : 'dragElement',
    content : "footer"
  },
  {
    name:"Editer la page",
    panel : 'dragElement',
    content : "page"
  },
  {
    name:"SEO"

  }
]
const styles = {
  textAlign:'center',
  padding:'1em',
  margin:'0.2em 0',
  cursor:'pointer',
  backgroundColor:'lightgray'
}
function MainPanel(){
  const dispatch = useDispatch();
  const changePanel = ({panel,content}) => {
    if (panel) dispatch(setPanel([panel]))
    if (content) dispatch(setEditedContent(content))
    dispatch(pushHistoryPanel([panel]))
  }
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns: "auto"
      }}>
      <PanelHeader name={"Menu d'édition"} />
      {items.map((e,index) => <div
        onClick={() => changePanel(e)}
        style={styles}
        key={index} >{e.name}</div>)}
    </div>
  )
}
export default MainPanel
