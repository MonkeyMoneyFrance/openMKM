import {combineReducers} from 'redux'
import users from './users'
import auth from './auth'

import results from './results'
import teams from './teams'
import form from './form'
export default combineReducers({
  users,
  results,
  form,
  auth,
  teams
});
