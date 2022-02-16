// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button Has Been Clicked
          <span className="span-count"> {count}</span> times
        </h1>
        <p className="para">Click the Button to increase the count</p>
        <button
          className="btn-primary"
          type="button"
          onClick={this.onIncrement}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
