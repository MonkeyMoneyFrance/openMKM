import React from 'react'
import {useDispatch} from 'react-redux'
import {setPanel,setEditedContent} from '../../redux/actions'
import styled from 'styled-components'
const Header = styled.nav`
background-color:white;
width:100%;
display : flex;
max-width:100%;
margin-top: 0px;
padding: 0px;
color: black;
list-style-type: none;
display: flex;
justify-content : space-between;
align-items: center;
& li {
  padding: 30px 20px;
  font-size: 1.5em;
  &.close {
    cursor : pointer;
  }
}
`

export default function PanelHeader(props) {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(setPanel(['main']))
    dispatch(setEditedContent(''))  
  }

  return (
    <Header>
      <li>{props.name}</li>
      <li className={'close'} onClick={close}>&times;</li>
    </Header>
  )
}
