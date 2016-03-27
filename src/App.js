import React from 'react'
import {connect} from 'react-redux'
import Repos from './Repos'
import RepoDetail from './RepoDetail'
import { setActiveRepo, fetchRepos } from './actions'
import Alert from './Alert'

const loadRepos = (props) => {
  props.dispatch(fetchRepos())
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handlerRefresh = this.handlerRefresh.bind(this)
  }
  //
  componentDidMount() {
    loadRepos(this.props)
    //   fetch('https://api.github.com/users/petehunt/repos?per_page=5')
    //   .then(res=> res.json())
    //   .then(res=>
    //     // { this.setState({myRepos: res}) }
    //     this.props.dispatch(setAllRepos(res))
    //   )
    //
  }
  handlerRefresh() {
    loadRepos(this.props)
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
      <RepoDetail repo={this.props.activeRepo} />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log("App> state= ",state);
  return state
}

export default connect(mapStateToProps)(App)
