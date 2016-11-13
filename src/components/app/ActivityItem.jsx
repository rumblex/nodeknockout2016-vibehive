import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActivityItem extends Component {
  render() {
    return (
      <div className="activity-item">
          <div>
            <div>
              <span className="activity-time"> 6AM, 24 Nov</span>
            </div>
            <div>
              <span className="activity-title"> Hike Lion's Head</span>
            </div>
            <div>
              <span  className="locale-title"> Cape Town </span>
            </div>
          </div>
          <div className="row">
            <div className="columns small-6 medium-6 large-6 chat-col">
              <button className="chat-button button"> CHAT!</button>
           </div>
          <div className="columns small-6 medium-6 large-6 sting-col">
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
