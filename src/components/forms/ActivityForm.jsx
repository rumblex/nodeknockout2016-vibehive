import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import HiveApi from 'HiveApi'
export class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.state = {
      file: null
    };
  }
  componentDidMount () {

  }
  handleImage(Event) {
    Event.preventDefault();
    let file = e.target.files[0];
    this.setState({
        file: file,
    });
  }
  submitActivity(Event) {
    Event.preventDefault();
    //grab image and hold
    //persist activity\
    var {dispatch} = this.props;
    var activityTitle
    //tag image and upload with activity

  }
  render() {
    return (
      <div className="activity-form small-centered small-12 columns">
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
          <input ref="file" type="file" name="file" s className="button upload-file"/>
          <button className="button"> Upload </button>
          <button className="button"> CREATE VIBE</button>
        </form>
      </div>
      </div>
    )
  }

}

export default connect()(ActivityForm);
