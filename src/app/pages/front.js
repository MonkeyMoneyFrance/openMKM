import React , { useState, useEffect } from 'react';
import MainEditor from "../components/editors/index"
import Button from '../components/front/button';
import Line from '../components/front/line';
import ParagraphEditor from '../components/front/paragraphEditor';
import Image from '../components/front/image';
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
  const dispatch = useDispatch();

  const isEditing = useSelector(state => state.editor.isEditing);
  const websiteString = JSON.stringify(website.pages.home)
  const pageString = useSelector(state =>  isEditing ? state.editor.page : websiteString);

  const page = {...JSON.parse(pageString)}

  const setEditedItem = (path,type,subProps) => dispatch(setEdition({path,type,subProps}))
  const droppedItem = (item,path,index,copy=false) => dispatch(dropItem({item,path,index,copy}))


  useEffect(()=>{
    console.log("je récupère le contenu de la page via redux")
  },[]);

  return(
    <div style={{flex:1,height:"100%",display:"flex",flexDirection:"row"}}>
      <DndProvider backend={HTML5Backend}>
        <MainEditor page={page}/>
        <div className="page">
        {page.blocks.map((block,i)=>{
          return(
            <div key={i} name="block" className={"block"+ (isEditing ? " blockEditing" : "")}
              style={{...block.style}}
              >
              <DropLine
                path={`blocks.${i}`}
                droppedItem={droppedItem}
                index={0}
              />
              {block.lines.map((line,j)=>
                <React.Fragment key={j}>
                  <Line
                    i={i}
                    j={j}
                    line={line}
                    droppedItem={droppedItem}
                    setEdition={setEditedItem}
                    />
                  <DropLine
                    path={`blocks.${i}`}
                    droppedItem={droppedItem}
                    index={j+1}
                  />
                </React.Fragment>
              )}
            </div>
          )}
        )}
      </div>
    </DndProvider>
  </div>
);
}
//export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Front))
export default (Front)
