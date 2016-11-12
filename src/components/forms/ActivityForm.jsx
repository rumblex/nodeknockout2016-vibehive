import React , {Component} from 'react'
import {connect} from 'react-redux'

export class ActivityForm extends Component {
  render() {
    return (
      <div className="activity-form small-centered small-12">
      <div>
        <p> create a vibe </p>
      </div>
      <div>
        <form >
          <label>VIBE NAME:</label>
          <input type="text" />
          <label>LOCATION: </label>
          <input type="text"/>
          <label>TIME:</label>
          <input type="datetime"/>
          <input ref="file" type="file" name="file" className="button upload-file"/>
          <button className="button"> Upload </button>
          <button className="button"> CREATE VIBE</button>
        </form>
      </div>
      </div>
    )
  }

}

export default connect()(ActivityForm);
