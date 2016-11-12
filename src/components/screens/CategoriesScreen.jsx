import React, {Component} from 'react';
import {connect} from 'react-redux';
import CategoryGrid from 'CategoryGrid';
import { startLoadCategories } from 'actions'

export class CategoriesScreen extends Component {
	componentDidMount() {
		this.props.dispatch(startLoadCategories());
	}
   render() {
    return (
      <div className='main-container'>
      <div className='row'>
      	<div className='small-8 small-centered columns'>
      	Pick Your Five Vibes
      	</div>
      	<CategoryGrid />
      </div>
      </div>
    )
  }
}

export default connect()(CategoriesScreen);
