import {
  REQUEST_FETCH_RESULT,TODOS_FAILURE,FETCH_RESULT
} from "../constants/index";

const initialState = null
export default function user(state = initialState, action){

  switch (action.type) {
    case REQUEST_FETCH_RESULT:
    return null
      break;
    case FETCH_RESULT:
    return action.payload
      break;
    case TODOS_FAILURE:
     return {error:action.payload}
    break;
    default:
      return state
    break;

  }
}
