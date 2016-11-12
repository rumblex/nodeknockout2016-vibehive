import React, {Component} from 'react'
import AppMenu from 'AppMenu'
import {connect} from 'react-redux'
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);
export class VibeHive extends Component {
  render(){
    return (
      <div>
            <AppMenu className="appmenu">
              <RadiumLink className="menu-item" to="/categories">Categories</RadiumLink>
            </AppMenu>
            <div className="row">
              {this.props.children}
            </div>
      </div>
    );
  }
}

export default connect()(VibeHive);
