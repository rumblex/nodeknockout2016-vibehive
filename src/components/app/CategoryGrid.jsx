import React,{Component} from 'react';
import SelectableCategoryIcon from 'SelectableCategoryIcon';
//use destructuring when importing from libs with more than one thing
import {connect} from 'react-redux'

export class CategoryGrid extends Component {
  render() {
    var {categories} = this.props;
    return(
      <div>
      CATEGORY GRID
      <SelectableCategoryIcon category="food" />
      </div>
    )
  }
}

//higher function component modifies the compoent before render provides route and data 
export default connect((state) => {
  return {categories: state.categories}
})(CategoryGrid);
