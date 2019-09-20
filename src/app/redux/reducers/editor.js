import {
  SET_EDITION,DROP_ITEM,TOGGLE_EDITOR,UPDATE_PAGE,SET_PANEL,SET_EDITED_ITEM,SET_EDITOR_FORM,RESET_EDITOR_FORM,MAP_FORM_TO_PAGE
} from "../constants/index";
import dotProp from 'dot-prop-immutable'
const initialState = {
  panel:['editElement'],
  path:'',
  isEditing:false,
  form:{},
  page:"{}"
}
export default function editor(state = initialState, action){

  switch (action.type) {
    case DROP_ITEM: {
      let {item,path,index,copy} = action.payload
      let newPage = {...JSON.parse(state.page)}

      let newItem = item.path ? dotProp.get(newPage,item.path) : item
      let oldPath,oldIndex

      // first remove old item
      if (item.path && !copy){
        oldIndex = item.path.split('.').reverse()[0]
        oldPath = item.path.split('.').slice(0, -1).join('.')
        let initalElement = dotProp.get(newPage,oldPath)
        initalElement[oldIndex] = null
        newPage = dotProp.set(newPage,oldPath,initalElement)
      }
      let element = dotProp.get(newPage,path)
      let newElement = []
      let i = 0 , j = 0
      while (i < element.length + 1){
        if (i == index) {
          newElement[i] = newItem
        } else {
          newElement[i] = element[j]
          j++
        }
        i++
      }

      // let newPage = item.path ? dotProp.get(newPage,item.path) : page
      newPage = dotProp.set(newPage,path,newElement)
      // sanitize
      if (item.path && !copy) {
        let sanitizeOldElement = dotProp.get(newPage,oldPath)
        newPage = dotProp.set(newPage,oldPath,sanitizeOldElement.filter(Boolean))
      }
      let sanitizeNewElement = dotProp.get(newPage,path)
      newPage = dotProp.set(newPage,path,sanitizeNewElement.filter(Boolean))
      // end sanitize
      return {...state,
        page:JSON.stringify(newPage),
        form:{},
        path:''
      }
    }

    case SET_EDITION: {
      let {path,type,subProps} = action.payload
      let propsElement = (dotProp.get(JSON.parse(state.page),path)||{})[subProps]
      return {...state,path,panel:[type,subProps],form:propsElement}
    }
    case TOGGLE_EDITOR:
    return {...state,isEditing:!state.isEditing,page:JSON.stringify(action.payload.page||{})}
      break;
    case UPDATE_PAGE:
      return {...state,
        page:JSON.stringify(action.payload),
        form:{},
        path:''
      }
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
