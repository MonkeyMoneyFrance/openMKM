import {
  SET_FORM,RESET_FORM
} from "../constants/index";

const initialState = {}
export default function form(state = initialState, action){

  switch (action.type) {
    case SET_FORM:
    return {...state,...action.payload}
      break;
    case RESET_FORM:
    return {}
      break;
    default:
      return state
    break;

  }
}
