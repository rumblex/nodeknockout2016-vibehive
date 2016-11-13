import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoryGrid from 'CategoryGrid'
import * as actions from 'actions'
import { hashHistory } from 'react-router'
const MAX_ACTIVE = 5;

export class CategoriesScreen extends Component {

	componentWillMount() {
		this.props.isPreloaded == "NOT_LOADED" ? hashHistory.push('/') : null;
	}

	// componentDidMount() {
	// 	var {dispatch, activeCategories} = this.props;
	// 	dispatch(actions.startAuth());
	// 	console.log("FETCHING");
	// 	dispatch(actions.startLoadCategories());
	// }
	    //is this icon clickable?
	continueEnabled(){
		let length = this.props.activeCategories.length;
	    return length <= MAX_ACTIVE && length > 0 ;
	}

	// openModal(){
	// 	ModalManager.open(<ModalOverlayScreen onRequestClose={() => true} ><LoginScreen /></ModalOverlayScreen>);
	// }

   render() {
   	var renderContinue = () =>
     { //if empty show message
      if(this.continueEnabled()){
      	return(
			<button type="button" className="continue-button button">CONTINUE</button>
      	);
      }else{
      	return(
			<button type="button" className="continue-button button" disabled>CONTINUE</button>
		);
      }
    }

    return (
      <div className='main-container'>
	      <div className='row'>
	      	<div className='small-12 small-centered columns'>
	      	<p className="cat-choose">CHOOSE UP TO FIVE VIBES</p>
	      	</div>
	      </div>
	      <div className="row">
		      <div className='small-11 small-centered columns'>
		      	<CategoryGrid />
		      </div>
	      </div>
	      <div className="row">
			<div className="continue small-10 medium-8 large-8 small-centered columns">
				{renderContinue()}
			</div>
	      </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {categories: state.categories, activeCategories: state.activeCategories, isPreloaded: state.isPreloaded}
})(CategoriesScreen);
