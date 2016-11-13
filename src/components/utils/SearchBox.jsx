import React, {Component} from 'react'
import {connect} from 'react-redux'


export default class SearchBox extends Component {
  static propTypes = {
    placeholder: React.PropTypes.string,
    onPlacesChanged: React.PropTypes.func
  }
  render() {
    return (
      <div>
        <input className="search-box" ref="input" {...this.props} type="text"/>
      </div>
    );
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    //this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }

export default connect()(SearchBox)
