import React from 'react'
import styled from 'styled-components'
import check from '../../assets/check.svg'
import SVG from 'react-inlinesvg';
const Button = styled.button`
  cursor:pointer;
  float:right;
  display:flex;
  background:${props => props.disabled ? 'yellow' : 'transparent'};
  padding:0.5em;
  margin:0 0.5em;
  border-radius:0.8em;
`
const Icon = styled.div`
  margin:0 0.5em;
  fill : ${props => props.disabled ? 'black' : 'gray'}
  & svg {
    width:13px;
  }
`

export default function MapButton({disabled,mapToPage}){

  const buttonClicked = () => mapToPage()
  return (

  <Button
    onClick={buttonClicked}
    disabled = {disabled}
    >
    <Icon disabled = {disabled}><SVG src={check}  /></Icon>
    {disabled ? 'Affecté' : "Affecter à cette page"}
  </Button>
)
}
