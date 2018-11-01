import * as types from 'constants/ActionTypes'
import { createAction } from 'redux-actions'
import axios from 'axios'

export const fetchReposRequest = createAction(types.FETCH_REPOS_REQUEST)
export const fetchReposSuccess = createAction(types.FETCH_REPOS_SUCCESS)
export const fetchReposFailed = createAction(types.FETCH_REPOS_FAILED)

export const fetchRepos = (userName) => async dispatch => {
  dispatch(fetchReposRequest())

  try {
    const resp = await axios.get(`users/${userName}/repos`);
    dispatch(fetchReposSuccess(resp.data))
  } catch (e) {
    dispatch(fetchReposFailed(e))
  }
}
