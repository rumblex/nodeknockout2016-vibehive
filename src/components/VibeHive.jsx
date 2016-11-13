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
                <RadiumLink className="menu-item white-menu" to="/app/categories">Select Categories</RadiumLink>
                <RadiumLink className="menu-item white-menu" to="/app/activities">Vibes</RadiumLink>
                <RadiumLink className="menu-item white-menu" to="/app/addactivity">Create Vibe</RadiumLink>
              </AppMenu>
            <div className="top-bar fixed">
         
             <img className="bar-logo" src={require("../images/ic_vibe_hive_72x72.png")} />
   
            </div>
            {this.props.children}
      </div>
    );
  }
}

export default connect()(VibeHive);
