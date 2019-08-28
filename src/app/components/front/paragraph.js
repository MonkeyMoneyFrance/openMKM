import React , { useState, useEffect } from 'react';

export default function Paragraph(props){
  return(
    <div  dangerouslySetInnerHTML={{__html: props.html}}/>
  );
}
