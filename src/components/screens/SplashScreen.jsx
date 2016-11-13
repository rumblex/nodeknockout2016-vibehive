import React, {Component} from 'react'
import {connect} from 'react-redux'


export class SplashScreen extends Component {
  render() {
    return(
      <div className='main-container'>
	      <div className='row'>
	      	<div className='small-10 small-centered columns'>
        		<img src={require("../../images/splash_logo_260x260.png")} />
        	</div>
          </div>
      </div>
    );
  }
}

export default connect()(SplashScreen);
