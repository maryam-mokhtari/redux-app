import React from 'react'
import styles from '../css/repo.css'

const Repo = (props) => (
  <div
  onClick={() => {
    props.handleClick(props.repo)
    console.log('clicked repo')
  }}
  className={styles.repo}
  style={{
    color: props.active? 'red':'teal',
    fontSize: 10 + 30 * props.repo.stargazers_count/props.maxRepoStars
  }}
  >
  <div>{props.repo.name}</div>
  <span
  className={styles.star}
  style={{
    display: ((props.shouldStarsShown && props.repo.stargazers_count!=0)? 'block':'none')
  }}
  >
  {props.repo.stargazers_count}*
  </span>
  </div>
)
export default Repo
