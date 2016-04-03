import React from 'react'

const Repo = (props) => (
  <div
  onClick={() => {props.handleClick(props.repo)}}
  style={{
    ...styles.repo, 
    color: props.active? 'red':'teal',
    fontSize: 10 + 30 * props.repo.stargazers_count/props.maxRepoStars
  }}
  >
  {props.repo.name}
  <span style={{paddingLeft: 3, color: 'red', display: props.shouldStarsShown? 'block':'none'}}>
  {props.repo.stargazers_count}*
  </span>
  </div>
)
const styles = {
  repo: {
    display: 'flex',
    padding: 5
  },
}

export default Repo
