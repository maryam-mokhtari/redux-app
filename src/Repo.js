import React from 'react'

const Repo = (props) => (
  <div
  onClick={() => {props.handleClick(props.repo)}}
  style={{...styles.repo, color: props.active? 'red':'teal'}}
  >
  {props.repo.name}
  </div>
)
const styles = {
  repo: {
    display: 'flex',
    padding: 5
  },
}

export default Repo
