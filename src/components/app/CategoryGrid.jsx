import React,{Component} from 'react';
//use destructuring when importing from libs with more than one thing
import {connect} from 'react-redux'

export class CategoryGrid extends Component {
  render() {
    var {categories} = this.props;
    console.log(categories);
    return(
      <div>CATEGORY GRID</div>
    )
  }
}

//higher function component modifies the compoent before render provides route and data 
export default connect((state) => {
  return {categories: state.categories}
})(CategoryGrid);
