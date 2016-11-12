import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActiveCategories extends Component {
  render() {
    return(
      <div className="button-bar">
        <img className="cat-button"/>
        <img className="cat-button"/>
        <img className="cat-button"/>
        <img className="cat-button"/>
        <img className="cat-button"/>
        <img className="cat-button"/>
      </div>
    )
  }
}

export default connect()(ActiveCategories);
