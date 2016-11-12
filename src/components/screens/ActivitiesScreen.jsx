import React, {Component} from 'react'
import {connect} from 'react-redux'
import ActiveCategories from 'ActiveCategories'

export class ActivitiesScreen extends Component {
  render() {
    return(
      <div>
        <ActiveCategories/>
      </div>
    );
  }
}

export default connect()(ActivitiesScreen);
