import { createStore, compose, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import reducer from './reducer'
import { routes} from './Root'
import * as ActionTypes from './actions/actionTypes'

const enhancer = compose(
  applyMiddleware(
    apiMiddleware,
    thunk ),
  reduxReactRouter({
    routes,  createHistory
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//store.subscribe(()=>{ console.log('Store changed:', store.getState()); })
// if (localStorage.getItem('repos')) {
//   store.dispatch(
//     {
//       type: ActionTypes.FETCH_REPOS_SUCCESS,
//       payload: JSON.parse(localStorage.getItem('repos'))
//     }
//   )
// }

function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if(module.hot) {
      // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer')
      store.replaceReducer(nextReducer)
    });
  }

  return store;
}

const store = configureStore({})

export { store }
