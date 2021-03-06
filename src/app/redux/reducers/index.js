import {combineReducers} from 'redux'
import users from './users'
import auth from './auth'
import transactions from './transactions'
import results from './results'
import teams from './teams'
import form from './form'
import editor from './editor'
export default combineReducers({
  users,
  results,
  transactions,
  form,
  auth,
  teams,
  editor
});
