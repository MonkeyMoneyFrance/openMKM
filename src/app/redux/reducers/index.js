import {combineReducers} from 'redux'
import user from './user'
import games from './games'
import results from './results'
import teams from './teams'
export default combineReducers({
  user,
  games,
  results,
  teams
});
