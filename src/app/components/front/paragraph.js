import React from 'react';
import styled from 'styled-components'
import {  useSelector  } from "react-redux";
export default function Paragraph(props){
  const Paragraph = styled[(/h1|h2|h3|h4|h5|h6|p|div|span|p/).test(props.attribute) ? props.attribute : "p"]`
    ${props => Object.keys(props.styles||[]).reduce((hover,key) => key.indexOf('Hover') == -1  ? `${hover}${key}:${props.styles[key]};` : hover,"")};
    &:hover {
      ${props => Object.keys(props.styles||[]).reduce((hover,key) => key.indexOf('Hover') > -1 ? `${hover} ${key.replace('Hover','')}:${props.styles[key]};` : hover,"")}
    }
  `

  return(
    <Paragraph
      attribute = {props.attribute}
      {...props.styles}
      >
      {props.html}
    </Paragraph>
  );
}
