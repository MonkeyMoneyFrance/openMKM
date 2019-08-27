import React , { useState, useEffect } from 'react';

import Button from '../components/front/button';
import Paragraph from '../components/front/paragraph';
import ParagraphEditor from '../components/front/paragraphEditor';
import Image from '../components/front/image';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchUser} from '../redux/actions';

import website from '../mocks/website'

const Forker = {
  paragraph : Paragraph, //or ParagraphEditor ?
  button : Button,
  image: Image,
};

// function mapStateToProps(state,props){
//   return {
//     page : state.website[props.location.pathname]
//   }
// }
// function matchDispatchToProps(dispatch){
//   return bindActionCreators({requestFetchUser},dispatch)
// }

function Front() {
  const [isEditing, setEditMode] = useState();

  let page = website.pages.home;

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
    <div style={{flex:1,height:"100%",display:"flex",flexDirection:"row"}}
    >
    {/*this is the editing part*/}
    <div style={{width:isEditing ? 500 : 0, borderRight:"1rem solid"}}>
    <Button style={{position:"absolute", top:500,left:isEditing ? 500 : 0}}
    onClick={()=>{
      setEditMode(!isEditing)
    }}
    buttonText="Clique"
    />
    </div>
    {/*this is the main front*/}
    <div className="page">
    {page.blocks.map((block,i)=>{
      return(
        <div key={i} name="block" className={"block"+ (isEditing ? " blockEditing" : "")}
        style={{...block.style}} onClick={()=>console.log("block "+i+" clicked")}
        >
        {block.lines.map((line,j)=>{
          return(
            <div key={i+"."+j} className={"line"+ (isEditing ? " lineEditing" : "")}
            style={{...line.style}} onClick={()=>console.log("line "+i+"."+j+" clicked")}
            >
            {line.columns.map((column,k)=>{
              return(
                <div key={i+"."+j+"."+k} className={"column"+ (isEditing ? " columnEditing" : "")}
                style={{...column.style}} onClick={()=>console.log("column "+i+"."+j+"."+k+" clicked")}
                >
                {column.elements.map((element,l)=>{
                  const Component = Forker[element.type];
                  return(
                    <div key={i+"."+j+"."+k+"."+l} className={"element"+ (isEditing ? " elementEditing" : "")}
                    style={{...element.style}} onClick={()=>console.log("element "+i+"."+j+"."+k+"."+l+" clicked")}
                    >
                    <Component
                    {...element.props}
                    />
                    </div>
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
    )}
  )}
  </div>
  </div>
);
}
//export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Front))
export default withRouter(Front)
