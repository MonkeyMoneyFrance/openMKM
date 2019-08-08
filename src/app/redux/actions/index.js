import {
  REQUEST_SET_USER,
  SET_USER,
  TODOS_FAILURE,
  REQUEST_FETCH_USER,
  REQUEST_FETCH_GAME,
  FETCH_GAME,
  REQUEST_FETCH_RESULT,
  FETCH_RESULT

} from "../constants/index";

export const sessionFailure = item => ({ type: TODOS_FAILURE, payload: item });
export const requestSetUser = item => ({ type: REQUEST_SET_USER, payload: item });
export const requestFetchUser = item => ({ type: REQUEST_FETCH_USER, payload: item });
export const requestFetchGame = item => ({ type: REQUEST_FETCH_GAME, payload: item });
export const setUser = item => ({ type: SET_USER, payload: item });
export const fetchGame = item => ({ type: FETCH_GAME, payload: item });
export const fetchResult = item => ({ type: FETCH_RESULT, payload: item });
export const requestFetchResult = item => ({ type: REQUEST_FETCH_RESULT, payload: item });
export const fetchTeam = item => ({ type: FETCH_TEAM, payload: item });
export const requestFetchTeam = item => ({ type: REQUEST_FETCH_TEAM, payload: item });
