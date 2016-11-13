import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import HiveApi from 'HiveApi'
import SearchBox from 'SearchBox'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {geoFire} from 'src/firebase/'


export class ActivityForm extends Component {
  static propTypes = {
    placeholder: React.PropTypes.string,
    onPlacesChanged: React.PropTypes.func
  }
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.submitActivity = this.submitActivity.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
    this.state = {
      file: null
    };
  }
  onPlacesChanged () {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
      console.log(this.searchBox.getPlaces())
    }
  }
  componentDidMount () {
    {/*Lets load the input*/}
    var input = ReactDOM.findDOMNode(this.refs.vibeLocation);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);

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
    var vibeTime = this.refs.vibeTime.value;
    var image = this.state.file;
    var vibeLocation = this.refs.vibeLocation.value;

    //lets geocode our address
    var address = `https://maps.googleapis.com/maps/api/geocode/json?address=${vibeLocation}&key=AIzaSyD8oJEU01e30XplGKVXpxfPMHvP2NrittE`;
    axios.get(address).then((response) => {
      console.log('res',response.data.results[0].geometry.location);
      //get Geofire to keep our location
    })
    .catch((error) => {
      console.log(error);
    })

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
          <input className="searchbox" ref="vibeLocation" onPlacesChanged={this.onPlacesChanged} type="text"/>
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
