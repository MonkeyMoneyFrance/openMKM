import {
  REQUEST_PROFILE,SET_PROFILE,REQUEST_LOGIN,TODOS_FAILURE
} from "../constants/index";

const initialState = {}
export default function user(state = initialState, action){

  switch (action.type) {
    case REQUEST_PROFILE:
    return {authenticated:'AUTHENTICATING'}
      break;
    case REQUEST_LOGIN:
    return {authenticated:'AUTHENTICATING'}
      break;
    case SET_PROFILE:
    return action.payload
      break;
    case TODOS_FAILURE:
     return {authenticated:'UNAUTHENTICATED'}
    break;
    default:
      return state
    break;

  }
}
