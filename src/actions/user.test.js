import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as types from 'constants/ActionTypes'
import * as userActions from './user'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore()
const axiosBackend = new MockAdapter(axios)

describe('User Actions', () => {
  const userName = 'octocat'
  const user = {name: 'OctoCat'}

  beforeEach(() => {
    store.clearActions()
    axiosBackend.reset()
  })

  test('should dispatch correct actions for fetchUser success response', async done => {
    axiosBackend.onGet(`users/${userName}`).reply(200, user)

    const expectedActions = [
      {
        type: types.FETCH_USER_REQUEST,
      },
      {
        type: types.FETCH_USER_SUCCESS,
        payload: user
      }
    ]

    await store.dispatch(userActions.fetchUser(userName));
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })

  test('should dispatch correct actions for fetchUser failed response', async done => {
    axiosBackend.onGet(`users/${userName}`).reply(400, 'Not found')

    const expectedActions = [
      {
        type: types.FETCH_USER_REQUEST,
      },
      {
        error: true,
        payload: expect.any(Object),
        type: types.FETCH_USER_FAILED,
      }
    ]

    await store.dispatch(userActions.fetchUser(userName));

    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
})
