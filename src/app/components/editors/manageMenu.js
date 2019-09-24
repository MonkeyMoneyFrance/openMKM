import React , {useState} from 'react'
import PanelHeader from './panelHeader'
import EditMenuModal from '../modal/editMenu'
import {useDispatch} from 'react-redux'
import {setPanel,setEditedContent} from '../../redux/actions'
import MapButton from '../buttons/mapMenuToPageButton'
import website from '../../mocks/website'
import styled from 'styled-components'
const styles = {
  textAlign:'center',
  padding:'1em',
  margin:'0.2em 0',
  cursor:'pointer',
  backgroundColor:'lightgray'
}
const LiMenuList = styled.li`
  padding:1em
  color: ${props => props.selected ? 'black' : 'gray'}
  text-decoration : ${props => props.selected ? 'underline' : 'none'}
`
const MenuList = styled.div`
 & header {
   margin:5px;
   font-size:1.2em;
   line-height : 1.2em;
 }
 & ul {
   max-height:300px;
   overflow : auto;
   list-style-type : none
 }

`
function ItemMenuList({e,i,setChosenMenu,mapToPage,selected}) {
  const clickedItem = () => setChosenMenu(i)
  const clickedButton = () => mapToPage(i)
  return (
    <LiMenuList
      key={i}
      onClick={clickedItem}
      selected={selected}>{e.name}
      <MapButton
        mapToPage={clickedButton}
        disabled={e.pages.includes('home')}/>
    </LiMenuList>
  )
}

function DragElement(){
  const dispatch = useDispatch();
  const [chosenMenu,setChosenMenu] = useState(null)
  const [isOpenModal,setOpenModal] = useState(false)
  const editMenu = () => {
    dispatch(setPanel(['dragElement']))
    dispatch(setEditedContent('menu'))
  }




  const changeChosenMenu = (i) => setChosenMenu(i)
  const openModal = () => setOpenModal(true)
  const closeModal = () => setOpenModal(false)
  const menusString = JSON.stringify(website.menus||[])
  const menus = JSON.parse(menusString)

  const copyMenu = () => setMenu(chosenMenu,null,true)
  const createMenu = () => {
    setChosenMenu(null)
    setOpenModal(true)
  }
  const deleteMenu = () => {
    let newMenus = [...menus]
    newMenus.splice(chosenMenu,1)
    return newMenus
  }
  const setMenu = (i,name,copy = false) => {
    let newMenus = [...menus]
    if (i && copy) {
      newMenus.push({...newMenus[i],name:name || 'copie de - ' + newMenus[i].name  })
    }
    else if (i) {
      newMenus[i] = ({...newMenus[i],name:name || 'Nouveau Menu'})
    } else {
      newMenus.push({
        name:name || 'Nouveau Menu',
        pages : [],
        style:{},
        lines : [{type:'line',style:{},columns:[{type:"column",style:{},elements:[]}]}]
      })
    }
    // should update newMenu with this structure...
  }

  const mapToPage = (i) => {
    const newMenus =  menus.map((m,index) => {
      let oldIndex = m.pages.findIndex(p => p == 'home')
      if (oldIndex > -1) m.pages.splice(oldIndex,1)
      else if (i == index) m = {...m,pages : ['home']}
      return m
    })
    // should update newMenu with this structure...
  }

  return (
    <div>
      {isOpenModal && <EditMenuModal
        editMenu={setMenu}
        chosenMenu = {chosenMenu}
        initialData={(menus[chosenMenu]||{})}
        close={closeModal}/>}
      <PanelHeader name={"Gestion du Menu"} />
          <MenuList>
            <header>Affectez votre page à un menu de la liste ci dessous :</header>
            <ul>
              {menus.map((e,i) => <ItemMenuList
                key={i}
                selected={i == chosenMenu}
                i={i}
                e={e}
                mapToPage = {setMenu}
                setChosenMenu={changeChosenMenu}/>)}
            </ul>
          </MenuList>

          <div style={{
            display:'grid',
            gridTemplateColumns: "auto"
            }}>
            <div
              onClick={createMenu}
              style={styles}
              >{"Créer un Nouveau Menu"}
            </div>
            {chosenMenu != null &&
            <div>
              <div
                onClick={copyMenu}
                style={styles}
                >{"Dupliquer ce Menu"}
              </div>

              <div
                onClick={editMenu}
                style={styles}
                >{"Editer ce Menu"}
              </div>
              <div
                onClick={openModal}
                style={styles}
                >{"Renommer ce Menu"}
              </div>
              <div
                onClick={deleteMenu}
                style={styles}
                >{"Supprimer ce Menu"}
              </div>
            </div>
            }
          </div>
    </div>

  )
}
export default DragElement
