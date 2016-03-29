import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import { fetchRepo } from './actions/'

class RepoDetail extends React.Component {
  handleClick() {
    this.props.dispatch(pushState(null, '/', ''))
  }

  componentDidMount() {
    this.props.dispatch(fetchRepo(this.props.name))
  }

  render() {
    const { repo, isFetching } = this.props
    if (isFetching) {
      return <div>loading...</div>
    } else if (repo) {
      return (
        <div style={styles.container}>
        <h2 style={styles.header}>{repo.name}</h2>
        <div style={styles.main}>
        <div style={styles.description}>{repo.description}</div>
        <div style={styles.sideBar}>
        <div style={styles.watcher}>{repo.watchers_count}</div>
        </div>
        </div>
        <div style={styles.footer}><a href={repo.url}>{repo.url}</a></div>
        <button style={{width: 100}} onClick={this.handleClick.bind(this)}>Back</button>
        </div>
      )
    } else {
      return <div>nothing</div>
    }
  }
}
const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color: 'teal'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 12,
  },
  description: {
    flexGrow: 2,
  },
  sideBar: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  starGazer: {
  },
  watcher:{
  },
  footer: {

  }
}

export default  connect((state) => {
  const name = state.router.location.query.name
  const repo = state.app.allRepos.filter((repo)=>{return name==repo.name})[0]
  const isFetching = state.app.isFetching
  return {repo, name,  isFetching}
})(RepoDetail)
