import React from 'react'
import { Route } from 'react-router'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'
import Parent from './Parent'
import Child from './Child'
import App from './App'
import RepoDetail from './RepoDetail'
import {store} from './configureStore'

const routes = (
  <div>
  <Route path="/Child" component={Child} />
  <Route path="/Parent" component={Parent} />
  <Route path="repo" component={RepoDetail} />
  <Route path="/" component={App}>
  </Route>
  </div>
)

//export default () => {
export default class extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          {routes}
        </ReduxRouter>
      </Provider>
    )
  }
}

export {routes}
