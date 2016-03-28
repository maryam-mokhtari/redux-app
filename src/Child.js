import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'


class Child extends React.Component {

  handleClick()  {
    this.props.dispatch(pushState(null, '/Parent', ''))
  }

  render() {
      return (
      <div>
        <div>I am child {this.props.id}!</div>
        <button onClick={this.handleClick.bind(this)}>back</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.router.location.query.id }
}

export default connect(mapStateToProps)(Child)
