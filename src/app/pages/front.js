import React , { useState, useEffect } from 'react';
import MainEditor from "../components/editors/index"
import Button from '../components/front/button';
import Column from '../components/front/column';
import ParagraphEditor from '../components/front/paragraphEditor';
import Image from '../components/front/image';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import {withRouter} from 'react-router-dom';
import {  useSelector , useDispatch } from "react-redux";
import {bindActionCreators} from 'redux'
import {requestFetchUser,updatePage,setEditedItem,setEditorForm,resetEditorForm,setPanel} from '../redux/actions';
import dotProp from 'dot-prop'
import website from '../mocks/website'



function Front() {
  const dispatch = useDispatch();

  const isEditing = useSelector(state => state.editor.isEditing);
  const page = useSelector(state => isEditing ? state.editor.page : website.pages.home);
  const setEdition = (path,type,subProps) => {
    // console.log(props)
    // let path = `blocks.${props.i}.lines.${props.j}.columns.${props.k}.elements.${props.l}`

    let propsElement = (dotProp.get(page,path)||{})[subProps]

    dispatch(setEditedItem(path))
    dispatch(setPanel([type,subProps]))
    dispatch(resetEditorForm())
    dispatch(setEditorForm(propsElement))
  }
  const addItem = (props) => {
    let path = `blocks.${props.i}.lines.${props.j}.columns.${props.k}.elements`
    let column = dotProp.get(page,path)
    let {item,index} = props
    let newColumn = []
    let i = 0 , j = 0

    while (i < column.length + 1){
      if (i == index) {
        newColumn[i] = item
      } else {
        newColumn[i] = column[j]
        j++
      }
      i++
    }
    dispatch(updatePage(dotProp.set(page,path,newColumn)))
  }

  useEffect(()=>{
    console.log("je récupère le contenu de la page via redux")
  },[]);

  useEffect(()=>{
    if (isEditing === null){
      // first time
      isEditing = false;
    } else if (isEditing === false){
      console.log("editing finished")
      //dispatch draft
    }
  },[isEditing]);


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
                      <div
                        onClick={()=>setEdition(`blocks.${i}.lines.${j}`,'editLine','styles')}
                        className={'default'}>O</div>
                        <div>ADD</div>
                        <div>COPY</div>
                        <div>MOVE</div>
                        <div>DELETE</div>
                    </div>
                    {line.columns.map((column,k)=>{
                      return(
                        <Column
                          key={k}
                          i={i}
                          j={j}
                          k={k}
                          column={column}
                          addItem={addItem}
                          setEdition={setEdition}
                          />
                      )}
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
