import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Avatar from 'material-ui/lib/avatar'
import Repo from './Repo'
import { setActiveRepo } from './actions'

class Repos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(repo) {
    this.props.dispatch(setActiveRepo(repo))
    this.props.dispatch(pushState(null, `/repo?name=${repo.name}` , ''))
  }

  render() {
    if (this.props.isFailed) {
      return <div>Failed!</div>
    }
    if (this.props.isFetching) {
      return <div>loading...</div>
    } else {
      const { active } = this.props
      // const active = this.props.active
      return (

        <div style={styles.container}>
          <Avatar src="https://avatars2.githubusercontent.com/u/239742?v=3&s=400" />
          <div style={styles.repos}>
            {Object.keys(this.props.allRepos).map((key) =>{
              return <Repo
                key = {key}
                handleClick={this.handleClick}
                active={active && active.name===key}
                repo={this.props.allRepos[key]}
              />
            }
            )}
          </div>
          <p style={styles.totalRepos}>
            total repos = {this.props.allRepos && Object.keys(this.props.allRepos).length}
          </p>
          {this.props.active? <div></div>:
             <div>Select one!</div>
          }
        </div>
      )
    }
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  repos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  totalRepos: { color:'gray'}
}

const mapStateToProps = (state) => {
  return {
    active: state.app.activeRepo,
    isFetching: state.app.isFetching,
    allRepos: state.app.allRepos,
    isFailed: state.app.isFailed,
   }
}
export default connect(mapStateToProps)(Repos)
