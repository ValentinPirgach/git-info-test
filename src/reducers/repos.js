import * as types from 'constants/ActionTypes'
import createReducer from 'utils/createReducer'

export default createReducer({list: []})({
  [types.FETCH_REPOS_REQUEST]: (state) => ({
    ...state,
    isFetching: true
  }),
  [types.FETCH_REPOS_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    list: action.payload
  }),
  [types.FETCH_REPOS_FAILED]: (state, action) => ({
    ...state,
    isFetching: false,
    ...action.payload.response
  })
})
