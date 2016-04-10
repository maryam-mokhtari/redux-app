import React from 'react'
import { connect } from 'react-redux'

class Test extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>Hello</div>
  }
}

// const mapState = (state) => {
//   const { active } = state.app
//   return { active }
// }
export default Test
// connect(mapState)(Test)

// const Test = () => <div>Hello</div>
// export default Test
