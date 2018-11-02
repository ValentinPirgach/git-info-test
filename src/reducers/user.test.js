import * as types from 'constants/ActionTypes'
import * as userActions from 'actions/user'
import reducer, { userInitialState } from './user'

describe('User Reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(userInitialState);
  });

  test(`should handle '${types.FETCH_USER_REQUEST}'`, () => {
    const requestAction = userActions.fetchUserRequest()
    expect(reducer({}, requestAction)).toEqual({ isFetching: true });
  })

  test(`should handle '${types.FETCH_USER_SUCCESS}'`, () => {
    const payload = {name: 'OctoCat'}
    const successAction = userActions.fetchUserSuccess(payload)

    expect(reducer({}, successAction)).toEqual({ empty: false, isFetching: false, ...payload });
  });

  test(`should handle '${types.FETCH_USER_FAILED}'`, () => {
    const payload = new Error({response: 'Not found'})
    const failedAction = userActions.fetchUserFailed(payload)

    expect(reducer({}, failedAction)).toEqual({ isFetching: false, payload });
  });
});
