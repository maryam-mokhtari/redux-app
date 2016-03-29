import React from 'react'
import {connect} from 'react-redux'
import Repos from './Repos'
import RepoDetail from './RepoDetail'
import { setActiveRepo, loadRepos, fetchRepos } from './actions'
import Alert from './Alert'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handlerRefresh = this.handlerRefresh.bind(this)
  }
  
  componentDidMount() {
    this.props.dispatch(loadRepos())
  }
  handlerRefresh() {
    this.props.dispatch(fetchRepos())
  }
  render() {
    console.log("App> render> props=", this.props);

    return (
      <div>
      <Alert isNetworkFailed={this.props.isNetworkFailed} dispatch={this.props.dispatch}/>
      <Repos
      allRepos={this.props.allRepos}
      />
      <button onClick={this.handlerRefresh}>Refresh</button>

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log("App> state= ",state);
  return state.app
}

export default connect(mapStateToProps)(App)
