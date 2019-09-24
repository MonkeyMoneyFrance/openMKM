import React , {useState} from 'react'
import Editor from '../forms/editor'
<<<<<<< HEAD

import {setPanel,resetEditorForm,setEditorForm} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import dotProp from 'dot-prop'
import styled from 'styled-components'
import sortUp from '../../assets/sort-up.svg'
import SVG from 'react-inlinesvg';


const nomMenu = 'Modifier'

const Icon = styled.span`
  cursor: pointer;
  width:12px;
  fill:black;
  transition: all 200ms ease-out;  
  &:hover {
    fill:grey;
  }
`

const ElementMenuItem = styled.div`
  display : flex;
  justify-content : space-around;
  background-color: ${(props) => props.color};
`


function ElementMenu1({nomMenu}) {
  const goToMenu = () => {
    console.log('test')
  }

  const closeTab =() => {
    console.log('prout')
  }

  return(
    <ElementMenuItem color='#FF5419'>
      <Icon onClick={closeTab}><SVG src={sortUp}/></Icon>
      <div>{nomMenu}</div>
      <Icon onClick={goToMenu}><SVG src={sortUp} /></Icon>
    </ElementMenuItem>
  )
}
=======
import PanelHeader from './panelHeader'
import {setPanel,resetEditorForm,setEditorForm,mapFormToPage} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux';
import dotProp from 'dot-prop-immutable'
>>>>>>> 2b50dd124ed161bd90a8120ffd7075db5166ae1a

function EditElement(props){
  const dispatch = useDispatch()
  const editedContent = useSelector(state => state.editor.editedContent);
  const page = JSON.parse(useSelector(state => state.editor[editedContent]))
  const idItem = useSelector(state => (dotProp.get(JSON.parse(state.editor[editedContent]),state.editor.path||'')||{}).type)
  const panel = useSelector(state => state.editor.panel);
<<<<<<< HEAD
  console.log(panel)
  const page = useSelector(state => state.editor.page)
=======
>>>>>>> 2b50dd124ed161bd90a8120ffd7075db5166ae1a
  const path = useSelector(state => state.editor.path);
  const cancelEdition = () => {
    dispatch(resetEditorForm())
    dispatch(setPanel(['dragElement']))
  }
  const switchForm = (subProps) => {
    const propsElement = (dotProp.get(page,path)||{})[subProps]

    dispatch(setPanel([panel[0],subProps]))
    dispatch(resetEditorForm())
    dispatch(setEditorForm(propsElement))
  }
  const updateForm = () => dispatch(mapFormToPage())

  return (
    <div>
<<<<<<< HEAD
      <ElementMenu1 nomMenu={nomMenu}/>
=======
      <PanelHeader name={"Edition d'Element"} />
>>>>>>> 2b50dd124ed161bd90a8120ffd7075db5166ae1a
      <ul>
        <li onClick={()=>switchForm('props')}>Contenu</li>
        <li onClick={()=>switchForm('styles')}>Style</li>
        <li onClick={cancelEdition}>Annuler</li>
      </ul>
      <Editor
        id={idItem}
        updateForm={updateForm}
        subProps={panel[1]}
        onSubmit={() => void 0}/>
    </div>

  )
}
export default EditElement
