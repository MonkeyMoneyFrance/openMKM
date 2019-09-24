import React , { useState, useEffect } from 'react';
import MainEditor from "../components/editors/index"
import Block from '../components/front/block';
import Menu from '../components/front/menu';
import Footer from '../components/front/footer';


import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import EditElements from '../components/buttons/editorElement'
import {withRouter} from 'react-router-dom';
import {  useSelector , useDispatch } from "react-redux";
import {bindActionCreators} from 'redux'
import DropLine from '../components/drop/dropLine'
import {requestFetchUser,updatePage,setEdition,setEditorForm,resetEditorForm,setPanel,dropItem} from '../redux/actions';
import dotProp from 'dot-prop-immutable'
import website from '../mocks/website'



function Front() {
  // const dispatch = useDispatch();

  const isEditing = useSelector(state => state.editor.isEditing);
  const editedContent = useSelector(state => state.editor.editedContent);

  const websiteString = JSON.stringify(website.pages.home)
  const webmenuString = JSON.stringify((website.menus||[]).find(menu => menu.pages.includes('home')) || {})
  const webfooterString = JSON.stringify(([]).find(footer => footer.pages.includes('home')) || {})

  const pageString = useSelector(state =>  isEditing ? state.editor.page : websiteString);
  const menuString = useSelector(state =>  isEditing ? state.editor.menu : webmenuString);
  const footerString = useSelector(state =>  isEditing ? state.editor.footer : webfooterString);

  const page = {...JSON.parse(pageString)}
  const menu = {...JSON.parse(menuString)}
  const footer = {...JSON.parse(footerString)}

  // const setEditedItem = (path,type,subProps) => dispatch(setEdition({content:"page",path,type,subProps}))
  // const droppedItem = (item,path,index,copy=false) => dispatch(dropItem({content:"page",item,path,index,copy}))


  useEffect(()=>{
    console.log("je récupère le contenu de la page via redux")
  },[]);

  return(
    <div style={{flex:1,height:"100%",display:"flex",flexDirection:"row"}}>
      <DndProvider backend={HTML5Backend}>
        <MainEditor page={page} menu={menu} footer={footer}/>
        <div className="page">
        <Menu
          isEditing={isEditing && (editedContent === 'menu')}
          menu={menu}
          />
        {page.blocks.map((block,i)=>
          <Block
            path={`blocks`}
            index={i}
            isEditing={isEditing && (editedContent === 'page')}
            block={block}
            key={i} />

        )}
        <Footer
          isEditing={isEditing && (editedContent === 'footer')}
          footer={footer}
          />
      </div>

    </DndProvider>
  </div>
);
}
//export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Front))
export default (Front)
