import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoryGrid from 'CategoryGrid'
import * as actions from 'actions'
import { hashHistory } from 'react-router'
//import TagCategoriesOverlay from 'TagCategoriesOverlay';

//required for modal
//import {modal} from 'react-redux-modal'
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


	//functions to pass as props to category grid
	addActiveCategory(category) {
		this.props.dispatch(actions.addActiveCategory(category));
	}
	removeActiveCategory(category) {
    	this.props.dispatch(actions.removeActiveCategory(category)) 
    }
  
    //HOW TO OPEN A MODAL:
	// openModal(){
	//     modal.add(TagCategoriesOverlay, {
	//       title: '',
	//       size: 'medium', // large, medium or small,
	//       closeOnOutsideClick: true, // (optional) Switch to true if you want to close the modal by clicking outside of it,
	//       hideTitleBar: true, // (optional) Switch to true if do not want the default title bar and close button,
	//       hideCloseButton: true, // (optional) if you don't wanna show the top right close button
	//       //.. all what you put in here you will get access in the modal props ;)
	//     });
	// }

   render() {
   	let {activeCategories} = this.props;
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
		      	<CategoryGrid 
		      	activeCategories = {activeCategories}
		      	onAddCategory = {this.addActiveCategory.bind(this)}
		      	onRemoveCategory = {this.removeActiveCategory.bind(this)}
		      	/>
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
  return {activeCategories: state.activeCategories, isPreloaded: state.isPreloaded}
})(CategoriesScreen);
