import React , {useState} from 'react'
import Editor from '../forms/editor'
import forms from '../../config/editor'

import PanelHeader from './panelHeader'
import {setPanel,resetEditorForm,setEditorForm,mapFormToPage} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux';
import dotProp from 'dot-prop-immutable'
import styled from 'styled-components'

const ElementMenu = styled.nav`
background-color: white;
width:100%;
display : flex;
max-width:100%;
margin-top: 0px;
margin-bottom : 20px;
padding: 0 px;
color: black;
list-style-type: none;
justify-content : space-between;
align-items: center;
& li {
  flex-grow : 1;
  padding: 10px;
  font-size: 1em;
  cursor : pointer;
  text-align : center;
} & .activeMenu {
  border-bottom : 2px solid #5fd3b6;
  background-color : #F7F7F7;
}`
function Menu({panel,keys = {}}){
  const dispatch = useDispatch()
  const editedContent = useSelector(state => state.editor.editedContent);
  const page = JSON.parse(useSelector(state => state.editor[editedContent]))
  const path = useSelector(state => state.editor.path);
  const switchForm = (subProps) => {
    const propsElement = (dotProp.get(page,path)||{})[subProps]
    dispatch(setPanel([panel[0],subProps]))
    dispatch(resetEditorForm())
    dispatch(setEditorForm(propsElement))
  }
  const cancelEdition = () => {
    dispatch(resetEditorForm())
    dispatch(setPanel(['dragElement']))
  }

  return(
    <ElementMenu>
      {keys.indexOf('props') > -1 && <li className={panel[1]==='props' ? 'activeMenu' : ''} onClick={()=>switchForm('props')}>Contenu</li>}
      {keys.indexOf('style') > -1 && <li className={panel[1]==='style' ? 'activeMenu' : ''} onClick={()=>switchForm('style')}>Style</li>}
    </ElementMenu>
  )
}

function EditElement(props){
const dispatch = useDispatch()
  const editedContent = useSelector(state => state.editor.editedContent);
  const idItem = useSelector(state => (dotProp.get(JSON.parse(state.editor[editedContent]),state.editor.path||'')||{}).type)
  const panel = useSelector(state => state.editor.panel);

  const updateForm = () => dispatch(mapFormToPage())
  const form = (forms.find(h => h.id === idItem) || {})
  return (
    <div>
      <PanelHeader name={"Edition d'Element"} />
      <Menu  keys={Object.keys(form)} panel={panel}/>
      <Editor
        form={form[panel[1]]||[]}
        updateForm={updateForm}
        onSubmit={() => void 0}/>
    </div>

  )
}
export default EditElement
