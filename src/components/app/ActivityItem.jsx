import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActivityItem extends Component {
  render() {
    return (
      <div className="activity-item">
        <div className="row">
          <div className="columns small-9 medium-9 large-9">
            <p className="activity-time"> 6AM, 24 Nov</p>
            <p className="acticity-title"> Hike Lion's Head </p>
            <p className="locale-title"> Cape Town </p>
          </div>
          <div className="columns small-3 medium-3 large-3">
            <button className="sting-button button"> STING!</button>
         </div>
       </div>
       <div className="row">
         <img src="images/" className="activity-image"/>
       </div>
      </div>
    )
  }
}

export default connect()(ActivityItem);
