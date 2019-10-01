import React , {useState,useEffect} from 'react'
import PanelHeader from './panelHeader'
import EditMenuModal from '../modal/editMenu'
import {useDispatch,useSelector} from 'react-redux'
import {setPage,getPage} from '../../utils/API'
import {setPanel,setEditedContent,pushHistoryPanel,updatePage} from '../../redux/actions'
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
  const isMapped = e.pages.includes('home')
  const clickedButton = () => mapToPage(i,!isMapped)
  return (
    <LiMenuList
      key={i}
      onClick={clickedItem}
      selected={selected}>{e.name}
      <MapButton
        mapToPage={clickedButton}
        disabled={isMapped}/>
    </LiMenuList>
  )
}

function ManageMenu(){
  const dispatch = useDispatch();
  const editedContent = useSelector(state => state.editor.editedContent);

  const editedMenu = useSelector(state => state.editor[editedContent]);

  const [menusString,updateMenus] = useState('[]')
  const [chosenMenu,setChosenMenu] = useState(null)
  const [isOpenModal,setOpenModal] = useState(false)
  const editMenu = () => {
    dispatch(setPanel(['dragElement']))
    dispatch(setEditedContent(editedContent))
    dispatch(pushHistoryPanel(["dragElement"]))
  }

  useEffect(()=>{
    getPage(`${editedContent}s`,'main').then((menus) => {
      let index = JSON.parse(menus).findIndex(m => m.pages.includes('home'))
      updateMenus(menus)
      if (index > -1) setChosenMenu(index)
    }).catch(err => console.log(err))
  },[])

  const changeChosenMenu = (i) => setChosenMenu(i)
  const openModal = () => setOpenModal(true)
  const closeModal = () => setOpenModal(false)
  const menus = JSON.parse(menusString)
  const copyMenu = () => setMenu(chosenMenu,{name:null},true)
  const createMenu = () => {
    setChosenMenu(null)
    setOpenModal(true)
  }
  const deleteMenu = () => {
    let newMenus = [...menus]
    newMenus.splice(chosenMenu,1)
    setPage(`${editedContent}s`,'main',newMenus).then(menus => {
      setChosenMenu(null)
      updatePage(menus)
      updateMenus(menus)
    }).catch(err => console.log(err))
  }
  const saveChanges = () => {
    let newMenus = [...menus]
    newMenus[chosenMenu] = {...newMenus[chosenMenu],...JSON.parse(editedMenu)}
    setPage(`${editedContent}s`,'main',newMenus).then(menus => {
      setChosenMenu(null)
      updateMenus(menus)
    }).catch(err => console.log(err))
  }
  const setMenu = (i,{name},copy = false) => {
    let newMenus = [...menus]
    if (i != null && copy) {
      newMenus.push({...newMenus[i],pages:[],name:name || 'copie de - ' + newMenus[i].name  })
    }
    else if (i != null) {
      newMenus[i] = ({...newMenus[i],name:name || 'Nouveau '+ editedContent})
    } else {
      newMenus.push({
        name:name || 'Nouveau ' + editedContent,
        pages : [],
        style:{},
        lines : [{type:'line',style:{},columns:[{type:"column",style:{},elements:[]}]}]
      })
    }

    setPage(`${editedContent}s`,'main',newMenus).then(menus => {
      dispatch(updatePage(newMenus.find(m => m.pages.includes('home'))||{}))
      updateMenus(menus)
    }).catch(err => console.log(err))

  }
  const mapToPage = (i,shouldMap = false) => {
    const newMenus =  menus.map((m,index) => {
      let oldIndex = m.pages.findIndex(p => p == 'home')
      if (oldIndex > -1) m.pages.splice(oldIndex,1)
      else if (i == index && shouldMap) m = {...m,pages : ['home']}
      return m
    })
    setPage(`${editedContent}s`,'main',newMenus).then(menus => {
      dispatch(updatePage(newMenus.find(m => m.pages.includes('home'))||{}))
      updateMenus(menus)
    }).catch(err => console.log(err))
  }
  return (
    <div>
      {isOpenModal && <EditMenuModal
        editMenu={setMenu}
        chosenMenu = {chosenMenu}
        initialData={(menus[chosenMenu]||{})}
        close={closeModal}/>}
       <PanelHeader name={"Gestion du "+ editedContent} />
          <MenuList>
            <header>Affectez votre page à un menu de la liste ci dessous :</header>
            <ul>
              {menus.map((e,i) => <ItemMenuList
                key={i}
                selected={i == chosenMenu}
                i={i}
                e={e}
                mapToPage = {mapToPage}
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
              >{"Créer un Nouveau "+ editedContent}
            </div>
            {chosenMenu != null &&
            <div>
              <div
                onClick={copyMenu}
                style={styles}
                >{"Dupliquer ce " + editedContent}
              </div>

              {menus[chosenMenu] && (menus[chosenMenu].pages||[]).includes('home') && <div
                onClick={editMenu}
                style={styles}
                >{"Editer ce " + editedContent}
              </div>
              }
              <div
                onClick={openModal}
                style={styles}
                >{"Renommer ce " + editedContent}
              </div>
              <div
                onClick={deleteMenu}
                style={styles}
                >{"Supprimer ce " + editedContent}
              </div>
              {menus[chosenMenu] && (menus[chosenMenu].pages||[]).includes('home') && (editedMenu) != JSON.stringify(menus[chosenMenu]) && <div
                onClick={saveChanges}
                style={styles}
                >{"Sauvegarder les changements sur ce " + editedContent}
              </div> }

            </div>
            }
          </div>
    </div>

  )
}
export default ManageMenu
