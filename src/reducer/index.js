import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'


export default combineReducers({
  router: routerStateReducer,
  app: appReducer,
  form: formReducer,
})
