import React , { useState, useEffect } from 'react';
import MainEditor from "../components/editors/index"
import Button from '../components/front/button';
import Column from '../components/front/column';
import ParagraphEditor from '../components/front/paragraphEditor';
import Image from '../components/front/image';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import EditElements from '../components/buttons/editorElement'
import {withRouter} from 'react-router-dom';
import {  useSelector , useDispatch } from "react-redux";
import {bindActionCreators} from 'redux'
import DropColumn from '../components/drop/dropColumn'
import {requestFetchUser,updatePage,setEditedItem,setEditorForm,resetEditorForm,setPanel} from '../redux/actions';
import dotProp from 'dot-prop'
import website from '../mocks/website'



function Front() {
  const dispatch = useDispatch();

  const isEditing = useSelector(state => state.editor.isEditing);
  const websiteString = JSON.stringify(website.pages.home)
  const pageString = useSelector(state =>  isEditing ? state.editor.page : websiteString);
  const page = JSON.parse(pageString)

  const setEdition = (path,type,subProps) => {
    let propsElement = (dotProp.get(page,path)||{})[subProps]
    dispatch(setEditedItem(path))
    dispatch(setPanel([type,subProps]))
    dispatch(resetEditorForm())
    dispatch(setEditorForm(propsElement))
  }
  const droppedItem = (item,path,index,copy=false) => {
    let newPage = {...page}
    let newItem = item.path ? dotProp.get(newPage,item.path) : item
    let oldPath,oldIndex
    // first remove old item
    if (item.path && !copy){
      oldIndex = item.path.split('.').reverse()[0]
      oldPath = item.path.split('.').slice(0, -1).join('.')
      let initalElement = dotProp.get(newPage,oldPath)
      initalElement[oldIndex] = null
      newPage = dotProp.set(newPage,oldPath,initalElement)
    }
    let element = dotProp.get(newPage,path)
    let newElement = []
    let i = 0 , j = 0

    while (i < element.length + 1){
      if (i == index) {
        newElement[i] = newItem
      } else {
        newElement[i] = element[j]
        j++
      }
      i++
    }


    // let newPage = item.path ? dotProp.get(newPage,item.path) : page
    newPage = dotProp.set(newPage,path,newElement)
    // sanitize
    if (item.path && !copy) {
      let sanitizeOldElement = dotProp.get(newPage,oldPath)
      newPage = dotProp.set(newPage,oldPath,sanitizeOldElement.filter(Boolean))
    }
    let sanitizeNewElement = dotProp.get(newPage,path)
    newPage = dotProp.set(newPage,path,sanitizeNewElement.filter(Boolean))
    // end sanitize

    dispatch(resetEditorForm())
    dispatch(setEditedItem(null))
    dispatch(updatePage(newPage))

  }

  useEffect(()=>{
    console.log("je récupère le contenu de la page via redux")
  },[]);

  useEffect(()=>{
    console.log('STILL EDIT')
    if (isEditing === null){
      // first time
      isEditing = false;
    } else if (isEditing === false){
      console.log("editing finished")
      //dispatch draft
    }
  });


  return(
    <div style={{flex:1,height:"100%",display:"flex",flexDirection:"row"}}>
      <DndProvider backend={HTML5Backend}>
        {/*this is the editing part*/}
        <MainEditor page={page}/>
        {/*this is the main front*/}
        <div className="page">
        {page.blocks.map((block,i)=>{
          return(
            <div key={i} name="block" className={"block"+ (isEditing ? " blockEditing" : "")}
              style={{...block.style}}
              // onClick={()=>console.log("block "+i+" clicked")}
              >
              {block.lines.map((line,j)=>{
                return(
                  <div key={i+"."+j} className={"line"+ (isEditing ? " lineEditing" : "")}
                    style={{...line.style}}
                    // onClick={()=>console.log("line "+i+"."+j+" clicked")}
                    >
                    <div className={'snippedEditorContainer lineSnippet'}>
                      <EditElements
                        path={`blocks.${i}.lines`}
                        index={j}
                        subProps={'styles'}
                        panel={'editLine'}
                        droppedItem={droppedItem}
                        itemEdition={setEdition}
                        />
                    </div>
                    <DropColumn
                      path={`blocks.${i}.lines.${j}`}
                      droppedItem={droppedItem}
                      index={0}
                    />
                    {line.columns.map((column,k)=>{
                      return(
                        <React.Fragment key={k}>
                          <Column
                            i={i}
                            j={j}
                            k={k}
                            column={column}
                            droppedItem={droppedItem}
                            setEdition={setEdition}
                            />
                          <DropColumn
                            droppedItem={droppedItem}
                            path={`blocks.${i}.lines.${j}`}
                            index={k+1}
                          />
                        </React.Fragment>

                      )
                    }
                    )}
                  </div>
                )}
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
export default withRouter(Front)
