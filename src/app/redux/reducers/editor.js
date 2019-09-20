import {
  TOGGLE_EDITOR,UPDATE_PAGE,SET_PANEL,SET_EDITED_ITEM,SET_EDITOR_FORM,RESET_EDITOR_FORM,MAP_FORM_TO_PAGE
} from "../constants/index";
import dotProp from 'dot-prop'
const initialState = {
  panel:['editElement'],
  path:null,
  isEditing:false,
  form:{},
  page:"{}"
}
export default function editor(state = initialState, action){

  switch (action.type) {
    case TOGGLE_EDITOR:
    return {...state,isEditing:!state.isEditing,page:JSON.stringify(action.payload.page||{})}
      break;
    case UPDATE_PAGE:
      return {...state,page:JSON.stringify(action.payload)}
      break;
    case SET_EDITED_ITEM:
      return {...state,path:action.payload}
      break;
    case MAP_FORM_TO_PAGE:
      return {
        ...state,
        page : JSON.stringify(dotProp.set(JSON.parse(state.page),`${state.path}.${state.panel[1]}`,{...state.form}))
      }
      break;
    case SET_EDITOR_FORM:
      return {
        ...state,
        form : {...state.form,...action.payload},
      }
      break;
    case RESET_EDITOR_FORM :
      return {...state,form:{}}
      break;
    case SET_PANEL:
      return {...state,panel:action.payload}
      break;
    default:
      return state
    break;

  }
}
