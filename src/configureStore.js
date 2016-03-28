import { createStore, compose, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import reducer from './reducer'
import { routes} from './Root'

const finalCreateStore = compose(
  applyMiddleware( apiMiddleware ),
  reduxReactRouter({
    routes,  createHistory
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer)

//store.subscribe(()=>{ console.log('Store changed:', store.getState()); })


export { store }
