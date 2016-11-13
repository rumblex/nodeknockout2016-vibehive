import React, {Component} from 'react'
import {connect} from 'react-redux'
import ActivityItem from 'ActivityItem'
import * as actions from 'actions'

export class ActivityList extends Component {
  constructor(props) {
    super(props);
  }
  ComponentDidMount() {
    
  }
  render(){
    var renderActivities = () =>{
      var acts =  [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ];
      if(acts.length === 0) {
        return(
          <p> No activities Yet</p>
        );
      }
      return acts.map((act) => {
        return(
          <ActivityItem key={act.id} {...act}/>
        );
      })
    }
    return(
      <div className="act-list">
        {renderActivities()}
      </div>
    );
  }
}

export default connect()(ActivityList);
