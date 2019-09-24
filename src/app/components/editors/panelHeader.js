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
    newHistory.splice(-1)
    let lastElement = [...newHistory].splice(-1).pop()
    dispatch(setPanel(lastElement))
    dispatch(setHistoryPanel(newHistory))
  }
  const close = () => {
    dispatch(setPanel(['main']))
    dispatch(setEditedContent(''))
    dispatch(setHistoryPanel([['main']]))

  }

  return (
    <Header>
      {history.length > 1 &&  <li onClick={goBack}>&larr;</li>}
      <li>{props.name}</li>
      <li className={'close'} onClick={close}>&times;</li>
    </Header>
  )
}
