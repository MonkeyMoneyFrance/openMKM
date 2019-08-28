import {
  REQUEST_SET_USER,
  SET_USER,
  TODOS_FAILURE,
  REQUEST_FETCH_USER,
  REQUEST_FETCH_GAME,
  FETCH_GAME,
  REQUEST_FETCH_RESULT,
  REQUEST_FETCH_TEAM,
  FETCH_TEAM,
  FETCH_RESULT,
  REQUEST_LOGIN,
  SET_PROFILE,
  REQUEST_PROFILE,
  SET_FORM,
  RESET_FORM,
  REQUEST_COTISATION,
  SET_COTISATION

} from "../constants/index";
export const requestLogin = item => ({ type: REQUEST_LOGIN, payload: item });
export const requestProfile = item => ({ type: REQUEST_PROFILE, payload: item });
export const setProfile = item => ({ type: SET_PROFILE, payload: item });
export const setForm = item => ({ type: SET_FORM, payload: item });
export const resetForm = item => ({ type: RESET_FORM, payload: item });

export const requestCotisations = item => ({ type: REQUEST_COTISATION, payload: item });
export const setCotisation = item => ({ type: SET_COTISATION, payload: item });
export const sessionFailure = item => ({ type: TODOS_FAILURE, payload: item });
export const requestFetchUser = item => ({ type: REQUEST_FETCH_USER, payload: item });
export const requestFetchGame = item => ({ type: REQUEST_FETCH_GAME, payload: item });
export const fetchUser = item => ({ type: SET_USER, payload: item });
export const fetchGame = item => ({ type: FETCH_GAME, payload: item });
export const fetchResult = item => ({ type: FETCH_RESULT, payload: item });
export const requestFetchResult = item => ({ type: REQUEST_FETCH_RESULT, payload: item });
export const fetchTeam = item => ({ type: FETCH_TEAM, payload: item });
export const requestFetchTeam = item => ({ type: REQUEST_FETCH_TEAM, payload: item });
