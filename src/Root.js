import React from 'react'
import { Route } from 'react-router'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'
import Parent from './Parent'
import Child from './Child'
import App from './App'
import RepoDetail from './RepoDetail'
import {store} from './configureStore'
import Form from './SimpleForm'

const routes = (
  <div>
    <Route path="/Child" component={Child} />
    <Route path="/Parent" component={Parent} />
    <Route path="/Form" component={Form} />
    <Route path="/repo" component={RepoDetail} />
    <Route path="/" component={App} />
  </div>
)

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
