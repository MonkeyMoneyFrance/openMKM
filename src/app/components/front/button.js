import React , { useState, useEffect } from 'react';
import ButtonSemantic from 'semantic-ui-react/dist/commonjs/elements/Button';
import {withRouter} from 'react-router-dom';

function Button(props){
  //props : buttonText, colorButton, inverted, fluid, size
  return(
    <ButtonSemantic
      content={props.buttonText}
      color={props.colorButton}
      inverted={props.inverted}
      fluid={props.fluid}
      size={props.size}
      style={props.style}
      onClick={()=>{
        if (props.onClick) props.onClick();
        if (!props.link) return
        else if (/^\//.test(props.link)) props.history.push(props.link)
        else if (/^https?:\/\//.test(props.link)) window.open(props.link, '_blank');
        else return
      }}
    />
  );
}
export default withRouter(Button)
