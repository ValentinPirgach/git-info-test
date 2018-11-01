import * as types from 'constants/ActionTypes'
import { createAction } from 'redux-actions'
import axios from 'axios'

export const fetchUserRequest = createAction(types.FETCH_USER_REQUEST)
export const fetchUserSuccess = createAction(types.FETCH_USER_SUCCESS)
export const fetchUserFailed = createAction(types.FETCH_USER_FAILED)

export const fetchUser = (userName) => async dispatch => {
  dispatch(fetchUserRequest())

  try {
    const resp = await axios.get(`users/${userName}`);
    dispatch(fetchUserSuccess(resp.data))
  } catch (e) {
    dispatch(fetchUserFailed(e))
  }
}
