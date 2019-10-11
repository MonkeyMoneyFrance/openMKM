import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setPage,getPage} from '../../utils/API'
import {resetEditor} from '../../redux/actions'
import styled from 'styled-components'
const Footer = styled.nav`
  background-color:#5fd3b6;
  position:absolute;
  bottom:0;
  width:100%;
  display : flex;
  max-width:100%;
  margin-top: 0px;
  padding: 5px 0 5px 0;
  color: white;
  list-style-type: none;
  display: flex;
  justify-content : space-between;
  align-items: center;
  & .item {
    font-size: 1.1em;
    text-align:center;
    padding:1em;
    margin:'0.2em 0';
    cursor : pointer;
    &:hover {
      color : #333333;
    }
  }
`
const items = [
  {
    name:"Quitter l'édition",
    icon : "delete"
  },
  {
    name:"Sauver",
    icon : 'save'
  },
  {
    name:"Sauver et quitter l'édition",
    icon : "saveAndQuit"
  },
]

export default function BottomBar(props) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.editor.page);
  const menu = useSelector(state => state.editor.menu);
  const footer = useSelector(state => state.editor.footer);
  const editedContent = useSelector(state => state.editor.editedContent);

  const deletePage = () => {
    dispatch(resetEditor())
  }
  const savePage = async () => {
    Promise.all([
      await setPage(`pages`,'home',JSON.parse(page)),
      await getPage(`menus`,'main').then(async (menus) => {
        let newMenus = [...JSON.parse(menus)]
        newMenus.map((m,i) => m.pages.includes('home') ? newMenus[i] = JSON.parse(menu) : void 0)
        await setPage(`menus`,'main' , newMenus)
      }).catch(err => console.log(err)),
      await getPage(`footers`,'main').then(async (footers) => {
        let newFooters = [...JSON.parse(footers)]
        newFooters.map((m,i) => m.pages.includes('home') ? newFooters[i] = JSON.parse(footer) : void 0)
        await setPage(`footers`,'main' , newFooters)
      }).catch(err => console.log(err))
    ])
  }
  const saveAndQuit = async () => {
    await savePage();
    deletePage();
  }
  const translate = (input) => {
    let json = {
      save : savePage,
      delete : deletePage,
      saveAndQuit : saveAndQuit
    }
    let func = json[input]
    func()
  }
  return (
    <Footer>
      <div style={{
        display:'grid',
        flex:1,
        gridTemplateColumns: "auto auto auto"
        }}>
        {items.map((e,index) => <div
          onClick={() => translate(e.icon)}
          className={'item'}
          key={index}
          >{e.name}</div>)}
      </div>
    </Footer>
  )
}
