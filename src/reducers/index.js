import { combineReducers } from 'redux'
import user from './user'
import repos from './repos'

const rootReducer = combineReducers({
  user,
  repos
})

export default rootReducer
