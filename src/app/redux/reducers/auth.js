import {
  REQUEST_PROFILE,SET_PROFILE,REQUEST_LOGIN,TODOS_FAILURE
} from "../constants/index";

const initialState = {count:0}
export default function user(state = initialState, action){

  switch (action.type) {
    case REQUEST_PROFILE:
    return {authenticated:'AUTHENTICATING',count:state.count+1}
      break;
    case REQUEST_LOGIN:
    return {authenticated:'AUTHENTICATING',count:state.count+1}
      break;
    case SET_PROFILE:
    return {...action.payload,authenticated:'AUTHENTICATED',count:state.count+1}
      break;
    case TODOS_FAILURE:
     return {authenticated:'UNAUTHENTICATED',count:state.count+1}
     break;
    default:
      return state
      break;

  }
}
