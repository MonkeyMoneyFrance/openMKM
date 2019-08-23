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
    paragraph : ParagraphEditor, //or Paragraph ?
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
          text="Clique"
        />
      </div>
      {/*this is the main front*/}
      <div className="verticalContainer">
        {Object.keys(page.blocks).map(i=>{
          let block = page.blocks[i];
          return(
            <div key={i} name="block" className="verticalContainer"
              style={{...block.style}}
            >
              {Object.keys(block.lines).map(j=>{
                let line = block.lines[j];
                return(
                  <div key={i+"."+j} className="horizontalContainer"
                    style={{...line.style}}
                  >
                    {Object.keys(line.columns).map(k=>{
                      let column = line.columns[k];
                      return(
                        <div key={i+"."+j+"."+k} className="verticalContainer"
                          style={{...column.style}}
                        >
                          {Object.keys(column.elements).map(l=>{
                              let element = column.elements[l];
                              const Component = Forker[element.type];
                              return(
                                <div key={i+"."+j+"."+k+"."+l}
                                  style={{...element.style,display:"flex"}}
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
