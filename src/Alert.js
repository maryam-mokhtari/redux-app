import React from 'react'
import {CLOSE_NETWORK_ALERT} from './actions/actionTypes'
const handleClick = (dispatch) => {
  return () => dispatch({type: CLOSE_NETWORK_ALERT})
}

export default (props) => {
  //return <div>alert</div>
  if (props.isNetworkFailed) {
    return <div> Network Failed <button onClick={handleClick(props.dispatch)}>X</button></div>
  }
  return <div />

}
