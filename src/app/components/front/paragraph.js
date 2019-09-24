import React from 'react';
import {  useSelector  } from "react-redux";
export default function Paragraph(props){
  const isEditing = useSelector(state => state.form);
  return(
    <div
      style={props.styles}
      dangerouslySetInnerHTML={{__html: props.html}}/>
  );
}
