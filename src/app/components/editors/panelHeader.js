import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setPanel,setEditedContent,setHistoryPanel} from '../../redux/actions'
import styled from 'styled-components'
const Header = styled.nav`
background-color:#5fd3b6;
width:100%;
display : flex;
max-width:100%;
margin-top: 0px;
padding: 5px 0 5px 0;
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

  const history = useSelector(state => state.editor.historyPanel)
  const goBack = () => {
    let newHistory = [...history]
    let lastElement = newHistory.slice(-1).pop()
    // newHistory.slice(-1)
    console.log(newHistory)
    console.log(lastElement[0])
    console.log(lastElement[1])
    //arr.slice(-1).pop();
    dispatch(setPanel(lastElement[0]))
    dispatch(setEditedContent(lastElement[1]))
    dispatch(setHistoryPanel(newHistory))
  }
  const close = () => {
    dispatch(setPanel(['main']))
    dispatch(setEditedContent(''))

  }

  return (
    <Header>
      <li></li>
      <li>{props.name}</li>
      <li className={'close'} onClick={close}>&times;</li>
    </Header>
  )
}
