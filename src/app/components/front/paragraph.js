import React from 'react';
import styled from 'styled-components'
import {  useSelector  } from "react-redux";
export default function Paragraph(props){
  const Paragraph = styled[(/h1|h2|h3|h4|h5|h6|p|div|span|p/).test(props.attribute) ? props.attribute : "p"]`
    ${props => {props}};
    &:hover {
      color:${props => props.hoverColor};
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
