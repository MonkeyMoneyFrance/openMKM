import {
  SET_USER,REQUEST_SET_USER,TODOS_FAILURE,REQUEST_FETCH_USER,REQUEST_COTISATION,SET_COTISATION
} from "../constants/index";

const initialState = null
export default function user(state = initialState, action){

  switch (action.type) {
    case REQUEST_FETCH_USER:
      return state || []
      break;
    case REQUEST_COTISATION : {
      let newState = (state == null || state.length == 0) ? action.payload : [...state];
      for (var i in action.payload){ // or replace certain item in state
        let obj = action.payload[i];
        let j = newState.findIndex(m=>m._id == obj._id);
        if (j!=-1) newState[j].cotisations=[]
      }
      return newState
      break;
    }
    case SET_COTISATION : {
      let newState = [...state];
      for (var i in action.payload){ // or replace certain item in state
        let obj = action.payload[i];
        let j = newState.findIndex(m=>m._id == obj.userId);
        if (j!=-1) {
          let cot = newState[j].cotisations.findIndex(c => c._id == obj._id)
          if (cot == -1) newState[j].cotisations.push(obj)
          else newState[j].cotisations[cot] = obj
        }
        else newState.push({cotisations : [obj]})
      }
      return newState
      break;
    }
    case REQUEST_SET_USER: {
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
    }
    case SET_USER:
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
