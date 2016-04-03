
import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Avatar from 'material-ui/lib/avatar'
import Repo from './Repo'
import { setActiveRepo } from './actions'

class Repos extends React.Component {
  constructor(props) {
    super(props)
    //this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(repo) {
    this.props.dispatch(setActiveRepo(repo))
    this.props.dispatch(pushState(null, `/repo?name=${repo.name}` , ''))
  }

  render() {
    if (this.props.isFailed) {
      return <div>Failed!</div>
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
                shouldStarsShown={this.props.shouldStarsShown}
                repo={this.props.allRepos[key]}
                maxRepoStars={this.props.maxRepoStars}
              />
            }
            )}
          </div>
            {(this.props.isFetching)? <div>loading...</div>: <div/>}
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
  const { active, isFetching, shouldStarsShown, allRepos, isFailed } = state.app
  const maxRepoStars = Object.keys(allRepos).reduce((memo, key) => {
    return allRepos[key].stargazers_count > memo? allRepos[key].stargazers_count:memo
  }, 0)
  return { active, isFetching, shouldStarsShown, allRepos, isFailed, maxRepoStars }
}
export default connect(mapStateToProps)(Repos)
