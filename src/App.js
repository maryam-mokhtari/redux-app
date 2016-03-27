import React from 'react'
import {connect} from 'react-redux'

import Repos from './Repos'
import RepoDetail from './RepoDetail'
import { setActiveRepo, setAllRepos } from './configureStore'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

      fetch('https://api.github.com/users/petehunt/repos?per_page=5')
      .then(res=> res.json())
      .then(res=>
      // { this.setState({myRepos: res}) }
         this.props.dispatch(setAllRepos(res))
      )

    }

  render() {
    console.log("App> render> props=", this.props);

    return <div>
        <Repos
           // allRepos={this.state.myRepos}
           allRepos={this.props.allRepos}
          />
        <RepoDetail repo={this.props.activeRepo} />
    </div>
  }
}

const mapStateToProps = (state)=>{
  console.log("App> state= ",state);
  return state
}

export default connect(mapStateToProps)(App)
