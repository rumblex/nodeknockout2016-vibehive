import React, {Component} from 'react'
import {connect} from 'react-redux'
import ActiveCategories from 'ActiveCategories'
import ActivityList from 'ActivityList'

export class ActivitiesScreen extends Component {
  render() {
    return(
      <div>
        <ActiveCategories/>
        <ActivityList/>
      </div>
    );
  }
}

export default connect()(ActivitiesScreen);
