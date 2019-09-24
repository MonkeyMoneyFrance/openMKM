import React , {useState} from 'react'
import Editor from '../forms/editor'

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

function EditElement(props){
  const dispatch = useDispatch()
  const idItem = useSelector(state => (dotProp.get(state.editor.page,state.editor.path)||{}).type)
  const panel = useSelector(state => state.editor.panel);
  console.log(panel)
  const page = useSelector(state => state.editor.page)
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
  return (
    <div>
      <ElementMenu1 nomMenu={nomMenu}/>
      <ul>
        <li onClick={()=>switchForm('props')}>Contenu</li>
        <li onClick={()=>switchForm('styles')}>Style</li>
        <li onClick={cancelEdition}>Annuler</li>
      </ul>
      <Editor id={idItem} subProps={panel[1]} onSubmit={() => void 0}/>
    </div>

  )
}
export default EditElement
