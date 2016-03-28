import React from 'react'
import { connect } from 'react-redux'

class RepoDetail extends React.Component {
    render() {
      const { repo } = this.props
    return repo?
    <div style={styles.container}>
    <h2 style={styles.header}>{repo.name}</h2>
    <div style={styles.main}>
    <div style={styles.description}>{repo.description}</div>
    <div style={styles.sideBar}>
    <div style={styles.watcher}>{repo.watchers_count}</div>
    </div>
    </div>
    <div style={styles.footer}><a href={repo.url}>{repo.url}</a></div>
    </div>
    : <div>nothing</div>
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
  const id = state.router.location.query.id
  const repo = state.app.allRepos.filter((repo)=>{return id==repo.id})[0]
  return {repo}
})(RepoDetail)
