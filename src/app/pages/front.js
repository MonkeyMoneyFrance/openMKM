import React , { useState, useMemo } from 'react';
import MainEditor from "../components/editors/index"
import Block from '../components/front/block';
import Menu from '../components/front/menu';
import Footer from '../components/front/footer';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import {withRouter} from 'react-router-dom';
import {  useSelector , useDispatch } from "react-redux";
import {getPage} from '../utils/API'
import styled from 'styled-components'

const Content = styled.div`
  flex : 1 0 auto;
`

const getItemsString = (items) => new Promise((resolve,reject) => {
  getPage(items,(/menus|footers/).test(items) ? 'main' : 'home')
  .then((item) => item ? (/menus|footers/).test(items) ?
      resolve(JSON.stringify(JSON.parse(item).find(e => e.pages.includes('home')) || {}))
      :
      resolve(item)
    : reject('null'))
  .catch(err => reject(err))
})

function Front() {
  async function getData(){
    let menu = null,footer = null, page = null;
    try {
      menu = await getItemsString('menus')
    } catch(e){
      console.log(e)
    }
    try {
      footer = await getItemsString('footers')
    } catch(e){
      console.log(e)
    }
    try {
      page = await getItemsString('pages')
    } catch(e) {
      console.log(e)
    }
    if (page) setPageString(page)
    if (footer) setFooterString(footer)
    if (menu) setMenuString(menu)
  }
  const [webmenuString,setMenuString] = useState('{}')
  const [webfooterString,setFooterString] = useState('{}')
  const [webpageString,setPageString] = useState('{"blocks":[{"lines":[]}]}')

  const isEditing = useSelector(state => state.editor.isEditing);

  const page = useSelector(state =>  isEditing ? {...JSON.parse(state.editor.page)} : {...JSON.parse(webpageString)} )
  const menu = useSelector(state =>  isEditing ? {...JSON.parse(state.editor.menu)} : {...JSON.parse(webmenuString)} )
  const footer = useSelector(state =>  isEditing ? {...JSON.parse(state.editor.footer)} : {...JSON.parse(webfooterString)} )

  useMemo(()=> getData(),[isEditing])
  return(
    <div style={{flex:1,minHeight:"100%",display:"flex",flexDirection:"row"}}>
      <DndProvider backend={HTML5Backend}>
        <MainEditor
          page={page}
          menu={menu}
          footer={footer}
        />
        <div className="page">
        <Menu menu={menu}/>
        <Content>
          {(page.blocks).map((block,i)=>
            <Block
              path={`blocks`}
              index={i}
              block={block}
              key={i}
              />
          )}
        </Content>
        <Footer footer={footer}  />
      </div>

    </DndProvider>
  </div>
);
}
export default (Front)
