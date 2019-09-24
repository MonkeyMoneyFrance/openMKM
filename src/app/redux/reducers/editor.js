import {
  SET_HISTORY_PANEL,SET_EDITED_CONTENT,SET_EDITION,DROP_ITEM,TOGGLE_EDITOR,UPDATE_PAGE,SET_PANEL,SET_EDITED_ITEM,SET_EDITOR_FORM,RESET_EDITOR_FORM,MAP_FORM_TO_PAGE
} from "../constants/index";
import dotProp from 'dot-prop-immutable'
const initialState = {
  panel:['main'],
  path:'',
  historyPanel:[],
  editedContent:'',
  isEditing:false,
  form:{},
  page:"{}",
  menu:"{}",
  footer:"{}"
}
export default function editor(state = initialState, action){

  switch (action.type) {
    case SET_HISTORY_PANEL : {
      return {...state,history:action.payload}
    }
    case DROP_ITEM: {
      let {content,item,path,index,copy} = action.payload
      let newContent = {...JSON.parse(state[content || 'page'])}
      let newItem = item.path ? dotProp.get(newContent,item.path) : item
      let oldPath,oldIndex

      // first remove old item
      if (item.path && !copy){
        oldIndex = item.path.split('.').reverse()[0]
        oldPath = item.path.split('.').slice(0, -1).join('.')
        let initalElement = dotProp.get(newContent,oldPath)
        initalElement[oldIndex] = null
        newContent = dotProp.set(newContent,oldPath,initalElement)
      }
      let element = dotProp.get(newContent,path)
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

      // let newContent = item.path ? dotProp.get(newContent,item.path) : page
      newContent = dotProp.set(newContent,path,newElement)
      // sanitize
      if (item.path && !copy) {
        let sanitizeOldElement = dotProp.get(newContent,oldPath)
        newContent = dotProp.set(newContent,oldPath,sanitizeOldElement.filter(Boolean))
      }
      let sanitizeNewElement = dotProp.get(newContent,path)
      newContent = dotProp.set(newContent,path,sanitizeNewElement.filter(Boolean))
      // end sanitize
      return {...state,
        [content || 'page']:JSON.stringify(newContent),
        form:{},
        path:''
      }
    }

    case SET_EDITION: {
      let {content,path,type,subProps} = action.payload
      let propsElement = (dotProp.get(JSON.parse(state[content || 'page']),path)||{})[subProps]
      return {...state,path,panel:[type,subProps],form:propsElement,editedContent:content}
    }
    case SET_EDITED_CONTENT : {
      return {...state,editedContent:action.payload}
    }
    case TOGGLE_EDITOR:
    return {...state,isEditing:!state.isEditing,page:JSON.stringify(action.payload.page||{}),menu:JSON.stringify(action.payload.menu||{})}
      break;
    case UPDATE_PAGE:
      return {...state,
        [state.editedContent || 'page']:JSON.stringify(action.payload),
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
        [state.editedContent || 'page'] : JSON.stringify(dotProp.set(JSON.parse(state[state.editedContent || 'page']),`${state.path}.${state.panel[1]}`,{...state.form}))
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
