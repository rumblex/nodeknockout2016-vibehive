import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActivityList extends Component {
  render(){
    return(
      <p> List Here </p>
    )
  }
}

export default connect()(ActivityList);
