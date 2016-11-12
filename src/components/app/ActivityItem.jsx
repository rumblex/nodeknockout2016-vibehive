import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActivityItem extends Component {
  render() {
    return (
      <div className="activity-item">
        <div>
          <p className="activity-time"> 6AM, 24 Nov</p>
          <p className="acticity-title"> Hike Lion's Head </p>
          <p className="locale-title"> Cape Town </p>
        </div>
        <div>
          <button> String</button>
        </div>

        <img className="activity-image"/>
      </div>
    )
  }
}

export default connect()(ActivityItem);
