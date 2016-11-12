import React, {Component} from 'react'
import AppMenu from 'app/AppMenu'
import {connect} from 'react-redux'
//components we need in this Component
export class VibeHive extends Component {
  render(){
    return (
      <div className="row">
          <div className="columns small-centered medium-12 large-12 text-center app-body">
            {/*render children here*/}
            <AppMenu/>
            {this.props.children}
          </div>
      </div>
    );
  }
}


export default connect()(VibeHive);
