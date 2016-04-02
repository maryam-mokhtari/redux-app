import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

class Parent extends React.Component {

  handleClick(){
    this.props.dispatch(pushState(null, '/Child?id=1' , ''))
  }

  render() {
  return (
    <div>
      I am Parent!
      <br/>
      <a
        onClick={this.handleClick.bind(this)}
        style={{cursor:'pointer'}}>
          Show Child
      </a>
    </div>
  )
  }


}

export default connect()(Parent)
