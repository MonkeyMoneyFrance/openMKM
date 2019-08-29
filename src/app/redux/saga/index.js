import { call, put, takeLatest, takeEvery,take } from 'redux-saga/effects'
import { setProfile,fetchUser,fetchTransaction,sessionFailure,fetchResult,fetchPublicPlace,fetchTeam} from '../actions'
import {
  ADD_USER,
  ADD_TRANSACTION,
  EDIT_USER,
  REQUEST_LOGIN,
  REQUEST_PROFILE,
  REQUEST_FETCH_PUBLIC_PLACE,
  REQUEST_FETCH_RESULT,
  REQUEST_FETCH_TRANSACTION,
  REQUEST_FETCH_USER,
  REQUEST_FETCH_TEAM
} from '../constants'
import {encodeParams} from '../../functions'
const URL = (process.env.NODE_ENV == 'production') ? 'api/' : "http://localhost:3000/api/"



function* requestFetchPublicPlace (action = '') {
  try {
    const options = {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    let params = encodeParams(action.payload) || ''
    const res = yield call(fetch, URL + 'publicPlace' + params, options)
    if (res.status == 200){
      const games = yield res.json()
      yield put(fetchPublicPlace(games))
    } else {
      throw "unable to authenticate"
    }
  } catch (e) {
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
    console.log(e)
  }
}

function* requestFetchResult (action = '') {
  try {
  const options = {
    credentials: 'include',
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }

  let params = ''
  params = "?" + Object.keys(action.payload)
           .map(k => encodeURIComponent(k) + '=' + encodeURIComponent((action.payload||{})[k]))
           .join('&')

  const res = yield call(fetch, URL + 'results' + params, options)
  if (res.status == 200){
    const results = yield res.json()
    yield put(fetchResult(results))
  } else {
    throw "unable to authenticate"
  }
  } catch (e) {
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
  }
}


function* requestLogin (action) {
  try {
  const options = {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(action.payload),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  const res = yield call(fetch, URL + 'login', options)
  if (res.status == 200){
    const user = yield res.json()
    yield put(setProfile(user))
  } else {
    throw "unable to authenticate"
  }
  } catch (e) {
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
    alert('Wrong Password/userName')
    console.log(e)
  }
}

function* requestProfile (action) {
  try {
  const options = {
    credentials: 'include',
    method: 'GET',
  }
  const res = yield call(fetch, URL + 'user', options)
  if (res.status == 200){
    const user = yield res.json()
    yield put(setProfile(user))
  } else {
    throw "unable to authenticate"
  }
  } catch (e) {
    // yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
    console.log(e)
  }
}
function* requestAddTransaction (action) {
  try {
  const options = {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({transactions:[action.payload]}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  const res = yield call(fetch, URL + 'transactions', options)
  if (res.status == 200){
    const transaction = yield res.json()
    yield put(fetchTransaction(transaction))
  } else {
    console.log(res.json())
    throw "unable to authenticate"
  }
  } catch (e) {
    console.log(e)
  }
}
function* requestAddUser (action) {
  try {
  const options = {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({users:[action.payload]}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  const res = yield call(fetch, URL + 'users', options)
  if (res.status == 200){
    const user = yield res.json()
    yield put(fetchUser(user))
  } else {
    console.log(res.json())
    throw "unable to authenticate"
  }
  } catch (e) {
    console.log(e)
  }
}
function* requestEditUser(action){
  try {
  const options = {
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(action.payload),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  console.log(action.payload)
  const res = yield call(fetch, URL + 'users/'+(action.payload||{})._id, options)
  if (res.status == 200){
    const user = yield res.json()
    yield put(fetchUser(user))
  } else {
    console.log(res.json())
    throw "unable to authenticate"
  }
  } catch (e) {
    console.log(e)
  }
}

function* requestFetchTransaction (action = '') {
  try {
    const options = {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    let params = encodeParams(action.payload) || ''
    const res = yield call(fetch, URL + 'transactions' + params, options)
    if (res.status == 200){
      const transactions = yield res.json()
      yield put(fetchTransaction(transactions))
    } else {
      throw "unable to authenticate"
    }
  } catch (e) {
    // yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
  }
}
function* requestFetchUser (action = '') {
  try {
  const options = {
    credentials: 'include',
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  let params = encodeParams(action.payload) || ''
  const res = yield call(fetch, URL + 'users' + params, options)
  if (res.status == 200){
    const users = yield res.json()
    yield put(fetchUser(users))
  } else {
    throw "unable to authenticate"
  }
  } catch (e) {
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
  }
}

function* requestFetchTeam (action = '') {
  try {
  const options = {
    credentials: 'include',
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }

  let params = encodeParams(action.payload) || ''
  const res = yield call(fetch, URL + 'teams' + params, options)
  if (res.status == 200){
    const teams = yield res.json()
    yield put(fetchTeam(teams))
  } else {
    throw "unable to authenticate"
  }
  } catch (e) {
    // yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
  }
}
// function* requestFetchUser (action) {
//   try {
//   yield call(fetch, URL + `v1/todos/${action.id}`, { method: 'DELETE' })
//   } catch (e) {
//     console.log(e)
//   // yield put(todosFailure(e.message))
//   }
// }

// function* updateTodo (action) {
// try {
// yield call(fetch, `v1/todos/${action.id}`, { method: 'POST' })
// } catch (e) {
// yield put(todosFailure(e.message))
// }
// }

function* rootSaga() {
  yield takeLatest(ADD_TRANSACTION,requestAddTransaction)
  yield takeLatest(ADD_USER,requestAddUser)
  yield takeLatest(EDIT_USER,requestEditUser)
  yield takeLatest(REQUEST_FETCH_PUBLIC_PLACE,requestFetchPublicPlace)
  yield takeLatest(REQUEST_FETCH_RESULT,requestFetchResult)
  yield takeLatest(REQUEST_FETCH_TEAM,requestFetchTeam)
  yield takeLatest(REQUEST_FETCH_USER,requestFetchUser)
  yield takeLatest(REQUEST_PROFILE ,requestProfile)
  yield takeLatest(REQUEST_LOGIN, requestLogin)
  yield takeLatest(REQUEST_FETCH_TRANSACTION,requestFetchTransaction)
}

export default rootSaga
