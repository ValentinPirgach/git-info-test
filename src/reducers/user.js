import * as types from 'constants/ActionTypes'
import createReducer from 'utils/createReducer'

export default createReducer({empty: true})({
  [types.FETCH_USER_REQUEST]: (state) => ({
    ...state,
    isFetching: true
  }),
  [types.FETCH_USER_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    empty: false,
    ...action.payload
  }),
  [types.FETCH_USER_FAILED]: (state, action) => ({
    ...state,
    isFetching: false,
    ...action.payload.response
  })
})
