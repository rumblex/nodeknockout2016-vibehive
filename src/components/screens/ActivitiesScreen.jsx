import React, {Component} from 'react'
import {connect} from 'react-redux'
import ActiveCategories from 'ActiveCategories'
import ActivityList from 'ActivityList'
import BottomBar from 'BottomBar'

export class ActivitiesScreen extends Component {
  render() {
    return(
      <div>
        <ActiveCategories/>
        <ActivityList/>
        <BottomBar/>
      </div>
    );
  }
}

export default connect()(ActivitiesScreen);
