import React , { useState, useEffect } from 'react';
// import ButtonSemantic from 'semantic-ui-react/dist/commonjs/elements/Button';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components'

const ButtonSemantic = styled.button`
  ${props => Object.keys(props.styles||[]).reduce((hover,key) => key.indexOf('Hover') == -1  ? `${hover}${key}:${props.styles[key]};` : hover,"")};
  &:hover {
    ${props => Object.keys(props.styles||[]).reduce((hover,key) => key.indexOf('Hover') > -1 ? `${hover} ${key.replace('Hover','')}:${props.styles[key]};` : hover,"")}
  }
`

function Button(props){
  return(
    <ButtonSemantic

      inverted={props.inverted}
      fluid={props.fluid}
      size={props.size}
      styles={props.styles}
      onClick={()=>{
        if (props.onClick) props.onClick();
        if (!props.link) return
        else if (/^\//.test(props.link)) props.history.push(props.link)
        else if (/^https?:\/\//.test(props.link)) window.open(props.link, '_blank');
        else return
      }}
    >{props.buttonText}</ButtonSemantic>
  );
}
export default withRouter(Button)
