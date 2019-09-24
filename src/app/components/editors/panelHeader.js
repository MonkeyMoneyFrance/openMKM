import React from 'react'
import {useDispatch} from 'react-redux'
import {setPanel,setEditedContent} from '../../redux/actions'
import styled from 'styled-components'
const Header = styled.nav`
background-color:#5fd3b6;
width:100%;
display : flex;
max-width:100%;
margin-top: 0px;
padding: 10px 0 10px 0;
color: white;
list-style-type: none;
display: flex;
justify-content : space-between;
align-items: center;
& li {
  padding: 10px 20px;
  font-size: 1.1em;
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
  const goMenu = () => {
    dispatch(setPanel)
  }

  return (
    <Header>
      <li></li>
      <li>{props.name}</li>
      <li className={'close'} onClick={close}>&times;</li>
    </Header>
  )
}
