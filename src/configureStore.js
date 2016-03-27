import {createStore, compose, applyMiddleware} from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

import reducer from './reducer'

const finalCreateStore = compose(
  applyMiddleware( apiMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer)

export { store }
