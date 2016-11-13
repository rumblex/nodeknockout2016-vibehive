import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import { hashHistory } from 'react-router'


export class SplashScreen extends Component {

	componentDidMount() {
		var {dispatch, activeCategories} = this.props;
		dispatch(actions.startAuth());
		console.log("FETCHING");
		dispatch(actions.startLoadCategories());
	}

	componentWillReceiveProps(nextProps){
		nextProps.isPreloaded == "LOADED" ? this.redirectIfLoaded() : null
	}

	redirectIfLoaded(){
		console.log("redirecting")
		hashHistory.push('app/categories');
	}


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

export default connect((state) => {
  return {isPreloaded: state.isPreloaded}
})(SplashScreen);
