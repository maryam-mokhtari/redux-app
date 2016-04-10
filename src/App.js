import React from 'react'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'
import Repos from './Repos'
import RepoDetail from './RepoDetail'
import { setActiveRepo, loadRepos, fetchRepos, showStars, refresh } from './actions'
import Alert from './Alert'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    //this.state = {}
    this.handlerRefresh = this.handlerRefresh.bind(this)
    this.handlerLoadMore = this.handlerLoadMore.bind(this)
    this.handlerShowStars = this.handlerShowStars.bind(this)
    this.handlerShowForm = this.handlerShowForm.bind(this)
  }

  componentDidMount() {
    if (Object.keys(this.props.allRepos).length == 0) {
      this.props.dispatch(loadRepos())
    }
  }
  handlerRefresh() {
    this.props.dispatch(refresh())
  }
  handlerLoadMore() {
    this.props.dispatch(loadRepos())
  }
  handlerShowStars() {
    this.props.dispatch(showStars())
  }
  handlerShowForm() {
    this.props.dispatch(pushState(null, '/Form' , ''))
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
      <button onClick={this.handlerLoadMore}>Load More</button>
      <button onClick={this.handlerShowStars}>Show Stars</button>
      <button onClick={this.handlerShowForm}>Show Form</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log("App> state= ",state);
  const { allRepos, isNetworkFailed} = state.app

  return { allRepos, isNetworkFailed}
}

export default connect(mapStateToProps)(App)
