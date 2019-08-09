import { call, put, takeLatest, takeEvery,take } from 'redux-saga/effects'
import { setProfile,fetchUser,sessionFailure,fetchResult,fetchGame,fetchTeam} from '../actions'
import {
  REQUEST_LOGIN,
  REQUEST_PROFILE,
  REQUEST_FETCH_GAME,
  REQUEST_FETCH_RESULT,
  REQUEST_FETCH_USER,
  REQUEST_FETCH_TEAM
} from '../constants'
import {encodeParams} from '../../functions'
const URL = (process.env.NODE_ENV == 'production') ? '' : "http://localhost:3000/api/"



function* requestFetchGame (action = '') {
  try {
    const options = {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    let params = encodeParams(action.payload) || ''
    const res = yield call(fetch, URL + 'games' + params, options)
    if (res.status == 200){
      const games = yield res.json()
      yield put(fetchGame(games))
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
  const user = yield res.json()

  yield put(setProfile(user))
  } catch (e) {
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
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
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
    console.log(e)
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
  console.log('REQUETS IS ',  URL + 'users' + params)
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
    yield put(sessionFailure({authenticated:'UNAUTHENTICATED'}))
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
  yield takeLatest(REQUEST_FETCH_GAME,requestFetchGame)
  yield takeLatest(REQUEST_FETCH_RESULT,requestFetchResult)
  yield takeLatest(REQUEST_FETCH_TEAM,requestFetchTeam)
  yield takeLatest(REQUEST_FETCH_USER,requestFetchUser)
  yield takeLatest(REQUEST_PROFILE ,requestProfile)
  yield takeLatest(REQUEST_LOGIN, requestLogin)
}

export default rootSaga
