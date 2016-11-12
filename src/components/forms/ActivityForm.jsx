import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import HiveApi from 'HiveApi'
export class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.submitActivity = this.submitActivity.bind(this);
    this.state = {
      file: null
    };
  }
  componentDidMount () {

  }
  handleImage(Event) {
    Event.preventDefault();
    let file = Event.target.files[0];
    this.setState({
        file: file,
    });
  }
  submitActivity(Event) {
    Event.preventDefault();
    //grab image and hold
    //persist activity\
    var {dispatch} = this.props;
    var vibeName = this.refs.vibeName.value;
    var vibeLocation = this.refs.vibeLocation.value;
    var vibeTime = this.refs.vibeTime.value;
    var image = this.state.file;

    if(vibeName.length !== 0 && vibeLocation.length !== 0 && vibeTime.length !== 0 && image !== null) {
      this.refs.vibeName.value = '';
      this.refs.vibeLocation.value = '';
      this.refs.vibeTime.value = '';
      dispatch(actions.startAddVibe(vibeName, vibeLocation, vibeTime, image));
    }
    //tag image and upload with activity

  }
  render() {
    return (
      <div className="activity-form small-centered small-12 columns">
      <div>
        <p> create a vibe </p>
      </div>
      <div>
        <form ref="addactivityform" onSubmit={this.submitActivity}>
          <label>VIBE NAME:</label>
          <input type="text" ref="vibeName" />
          <label>LOCATION: </label>
          <input type="text" ref="vibeLocation"/>
          <label>TIME:</label>
          <input type="datetime" ref="vibeTime"/>
          <input ref="file" type="file" name="file" onChange={this.handleImage} className="button upload-file"/>
          <input type="submit" className="button" value="CREATE VIBE"/>
        </form>
      </div>
      </div>
    )
  }

}

export default connect()(ActivityForm);
