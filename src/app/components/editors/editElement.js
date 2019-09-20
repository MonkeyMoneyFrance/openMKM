import React , {useState} from 'react'
import Editor from '../forms/editor'
import {setPanel,resetEditorForm,setEditorForm,mapFormToPage} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux';
import dotProp from 'dot-prop'

function EditElement(props){
  const dispatch = useDispatch()
  // const page = JSON.parse(useSelector(state => state.editor.page))
  const idItem = useSelector(state => (dotProp.get(JSON.parse(state.editor.page),state.editor.path)||{}).type)
  const panel = useSelector(state => state.editor.panel);
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
