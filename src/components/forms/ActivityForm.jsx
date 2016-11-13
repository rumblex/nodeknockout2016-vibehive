import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import HiveApi from 'HiveApi'
import SearchBox from 'SearchBox'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {geoFire} from 'src/firebase/'
import TagCategoriesOverlay from 'TagCategoriesOverlay';
import {modal} from 'react-redux-modal'
import { hashHistory } from 'react-router'
import moment from 'moment'

export class ActivityForm extends Component {
  componentWillMount() {
    this.props.isPreloaded == "NOT_LOADED" ? hashHistory.push('/') : null;
  }
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

  //open the tagging vibe overlay
  openTagModal(vibeName, locArr, vibeTime, image, tags){
      modal.add(TagCategoriesOverlay, {
        title: '',
        size: 'medium', // large, medium or small,
        closeOnOutsideClick: true, // (optional) Switch to true if you want to close the modal by clicking outside of it,
        hideTitleBar: true, // (optional) Switch to true if do not want the default title bar and close button,
        hideCloseButton: true, // (optional) if you don't wanna show the top right close button
        //.. all what you put in here you will get access in the modal props ;)
        vibeName,
        locArr,
        vibeTime,
        image,
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
    var locArr = [];

    //lets geocode our address
    var address = `https://maps.googleapis.com/maps/api/geocode/json?address=${vibeLocation}&key=AIzaSyD8oJEU01e30XplGKVXpxfPMHvP2NrittE`;
    axios.get(address).then((response) => {
      var loc = response.data.results[0].geometry.location
      console.log('res',loc);
      //get Geofire to keep our location
      locArr = [loc.lat, loc.lng];

      if(vibeName.length !== 0 && locArr.length !== 0 && vibeTime.length !== 0 && image !== null) {
        this.openTagModal(vibeName, locArr, vibeTime, image);
      }
      //tag image and upload with activity
    })
    .catch((error) => {
      console.log(error);
    })



  }
  render() {
    return (
      <div>
      <div className="grey-row">
        <p> CREATE A VIBE </p>
      </div>
      <div className="activity-form small-centered small-12 columns">
      <div>
        <form ref="addactivityform" onSubmit={this.submitActivity}>
          <label>VIBE NAME:</label>
          <input type="text" ref="vibeName" />
          <label>LOCATION: </label>
          <input className="searchbox" ref="vibeLocation" onPlacesChanged={this.onPlacesChanged} type="text"/>
          <label>TIME:</label>
          <input type="text" ref="vibeTime" />
          <input ref="file" type="file" name="file" onChange={this.handleImage} className="button yellow-button upload-file"/>
          <input type="submit" className="button yellow-button" value="NEXT"/>

        </form>
      </div>
      </div>
      </div>
    )
  }

}

export default connect((state) => {
  return {isPreloaded: state.isPreloaded}
})(ActivityForm);
