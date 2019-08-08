import {
  REQUEST_FETCH_TEAM,TODOS_FAILURE,FETCH_TEAM
} from "../constants/index";

const initialState = null
export default function user(state = initialState, action){

  switch (action.type) {
    case REQUEST_FETCH_TEAM:
    return []
      break;
    case FETCH_TEAM:
    return [...state,...action.payload]
      break;
    case TODOS_FAILURE:
     return {error:action.payload}
    break;
    default:
      return state
    break;

  }
}
