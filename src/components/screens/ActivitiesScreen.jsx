import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActivitiesScreen extends Component {
  render() {
    return(
      <div>
        <p> Activity Screen</p>
      </div>
    );
  }
}

export default connect()(ActivitiesScreen);
