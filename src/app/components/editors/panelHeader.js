import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setPanel,setEditedContent,setHistoryPanel} from '../../redux/actions'
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
      {history.length > 0 &&  <li onClick={goBack}>Before</li>}
      <li>{props.name}</li>
      <li className={'close'} onClick={close}>&times;</li>
    </Header>
  )
}
