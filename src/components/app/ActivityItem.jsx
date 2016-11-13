import React, {Component} from 'react'
import {connect} from 'react-redux'
import {storageRef} from 'src/firebase/'

export class ActivityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ''
    };
  }
  componentDidMount(){
    var {dispatch, time, id, name} = this.props;
      //build  Image link
      storageRef.child(`${id}.png`).getDownloadURL().then((url) => {
        console.log('url', url);
        this.setState({
          link: url
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    var {dispatch, time, id, name} = this.props;
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
              <span  className="locale-title">Location</span>
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
         <img src={this.state.link} className="activity-image"/>
       </div>
      </div>
    )
  }
}

export default connect()(ActivityItem);
