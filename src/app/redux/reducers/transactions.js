import {
  REQUEST_FETCH_GAME,TODOS_FAILURE,FETCH_GAME
} from "../constants/index";

const initialState = null
export default function user(state = initialState, action){

  switch (action.type) {
    case REQUEST_FETCH_GAME:
    return state || []
      break;
    case FETCH_GAME:
      if (state == null || state.length == 0) return action.payload // state init
      else{
        let newState = [...state];
        for (var i in action.payload){ // or replace certain item in state
          let obj = action.payload[i];
          let j = newState.findIndex(m=>m._id == obj._id);
          if (j!=-1) newState[j]=obj
          else newState.push(obj)
        }
        return newState
      }
      break;
    case TODOS_FAILURE:
     return []
    break;
    default:
      return state
    break;

  }
}
