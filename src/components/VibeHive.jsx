import React, {Component} from 'react'
import AppMenu from 'AppMenu'
import {connect} from 'react-redux'
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);
export class VibeHive extends Component {
  render(){
    return (
      <div className="application">
              <AppMenu className="appmenu">
                <RadiumLink className="menu-item" to="/categories">Categories</RadiumLink>
              </AppMenu>
            <div className="top-bar fixed">
            </div>
            {this.props.children}
      </div>
    );
  }
}

export default connect()(VibeHive);
