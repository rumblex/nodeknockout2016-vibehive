import React , {Component} from 'react'
import {connect} from 'react-redux'

export class ActivityForm extends Component {
  render() {
    return (
      <div className="activity-form">
      <div>
        <p> create a vibe </p>
      </div>
      <div>
        <form>
          <label>VIBE NAME:</label>
          <input type="text" />
          <label>LOCATION: </label>
          <input type="text"/>
          <input type="date-time"/>
          <button> Upload </button>
          <button> CREATE VIBE</button>
        </form>
      </div>
      </div>
    )
  }

}

export default connect()(ActivityForm);
