import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import appReducer from './appReducer'

export default combineReducers({
  router: routerStateReducer,
  app: appReducer
})
