import React , { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';

function Image(props){
  //props : buttonText, colorButton, inverted, fluid, size
  if (!props.src) return <img src={"http://via.placeholder.com/350x150"}/>

  return(
    <img
      style={{objectFit:props.objectFit}}
      size={props.size}
      src={props.src}
      rounder = {props.rounded}
      onClick={()=>{
        if (props.isEditing == true) return
        if (!props.link) return
        else if (/^https?:\/\//.test(props.link)) window.open(props.link, '_blank');
        else if (/^\//.test(props.link)) props.history.push.push(props.link)
        else {
          let url_direct = props.link.replace(/^\//,'').replace(/\?/g,'&')
          props.history.push('/?page='+url_direct,'/'+props.link.replace(/^\//,''))
        }
      }}
    />
  );
}
export default withRouter(Image)
