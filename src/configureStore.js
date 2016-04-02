import { createStore, compose, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import reducer from './reducer'
import { routes} from './Root'
import * as ActionTypes from './actions/actionTypes'

const finalCreateStore = compose(
  applyMiddleware(
    apiMiddleware,
    thunk ),
  reduxReactRouter({
    routes,  createHistory
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer)

//store.subscribe(()=>{ console.log('Store changed:', store.getState()); })
// if (localStorage.getItem('repos')) {
//   store.dispatch(
//     {
//       type: ActionTypes.FETCH_REPOS_SUCCESS,
//       payload: JSON.parse(localStorage.getItem('repos'))
//     }
//   )
// }
export { store }
