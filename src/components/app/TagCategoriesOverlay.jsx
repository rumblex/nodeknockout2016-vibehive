import React, {Component} from 'react'
import {connect} from 'react-redux'
import CategoryGrid from 'CategoryGrid'
import * as actions from 'actions'
import { hashHistory } from 'react-router'
const MAX_ACTIVE = 5;

export class TagCategoriesOverlay extends Component {
   constructor(props) {
      super(props);
   }
	//is this button clickable?
	continueEnabled(){
		let length = this.props.activeTags.length;
	    return length <= MAX_ACTIVE && length > 0 ;
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	//call this to remove the modal
	removeThisModal() {
	    this.props.removeModal();
	}

	createVibe(){
		this.props.dispatch(actions.startAddVibe(this.props.vibeName, 
			this.props.locArr, 
			this.props.vibeTime, 
			this.props.image, 
			this.props.activeTags));
		console.log('transitioning');
		hashHistory.push('/app/activities');
		this.removeThisModal();
	}

	//functions to pass as props to category grid
	addTag(category) {
		this.props.dispatch(actions.addTag(category));
	}
	removeTag(category) {
    	this.props.dispatch(actions.removeTag(category)) 
    }

   render() {
   	let {activeTags} = this.props;
   	var renderContinue = () =>
     { //if empty show message
      if(this.continueEnabled()){
      	return(
			<button type="button" className="continue-button button" onClick={this.createVibe.bind(this)} >FINISH</button>
      	);
      }else{
      	return(
			<button type="button" className="continue-button button" disabled>FINISH</button>
		);
      }
    }

    return (
      <div className='main-container translucent-component'>
	      <div className='row'>
	      	<div className='small-12 small-centered columns category-label'>
	      	Tag Your Vibe
	      	</div>
	      </div>
	      <div className="row">
		      <div className='small-11 small-centered columns'>
		      	<CategoryGrid 
		      	activeCategories = {activeTags}
		      	onAddCategory = {this.addTag.bind(this)}
		      	onRemoveCategory = {this.removeTag.bind(this)}
		      	/>
		      </div>
	      </div>
	      <div className="row">
			<div className="continue small-10 small-centered columns">
				{renderContinue()}
			</div>
	      </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {activeTags: state.activeTags}
})(TagCategoriesOverlay);
