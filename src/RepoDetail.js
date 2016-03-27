import React from 'react'

const RepoDetail = (props) => {
  console.log("RepoDetail> props=",props);
  return props.repo?
  <div style={styles.container}>
  <h2 style={styles.header}>{props.repo.name}</h2>
  <div style={styles.main}>
  <div style={styles.description}>{props.repo.description}</div>
  <div style={styles.sideBar}>
  <div style={styles.watcher}>{props.repo.watchers_count}</div>
  </div>
  </div>
  <div style={styles.footer}><a href={props.repo.url}>{props.repo.url}</a></div>
  </div>
  : <div>Select one!</div>
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

export default  RepoDetail
