import React, {Component} from 'react'
import {connect} from 'react-redux'
import {storageRef} from 'firebase'

export class ActivityItem extends Component {
  render() {
    var {dispatch, time, key, location, name} = this.props;
    //build  Image link
    
    return (
      <div className="activity-item">
          <div>
            <div>
              <span className="activity-time">{time}</span>
            </div>
            <div>
              <span className="activity-title">{name}</span>
            </div>
            <div>
              <span  className="locale-title">{location}</span>
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
