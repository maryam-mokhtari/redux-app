import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer)

export { store }
