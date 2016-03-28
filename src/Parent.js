import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

const handleClick = (dispatch) => {
  return () => dispatch(pushState(null, '/Child?id=1' , ''))
}
class Parent extends React.Component {

  render() {
  return (
    <div>
      I am Parent!
      <br/>
      <a
        onClick={handleClick(this.props.dispatch)}
        style={{cursor:'pointer'}}>
          Show Child
      </a>
    </div>
  )
  }


}

export default connect()(Parent)
