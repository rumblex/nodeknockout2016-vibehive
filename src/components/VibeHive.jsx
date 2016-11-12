import React, {Component} from 'react'
import AppMenu from 'AppMenu'
import {connect} from 'react-redux'
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);
//styles for the Burger menu
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '10px',
      top: '10px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export class VibeHive extends Component {
  render(){
    return (
      <div>
            {/*render children here*/}
            <AppMenu styles= {styles}>
              <RadiumLink className="menu-item" to="/categories">Categories</RadiumLink>
            </AppMenu>
            {this.props.children}
      </div>
    );
  }
}

export default connect()(VibeHive);
