import React,{Component} from 'react';
import SelectableCategoryIcon from 'SelectableCategoryIcon';
//use destructuring when importing from libs with more than one thing
import {connect} from 'react-redux'
const ROW_SIZE = 3

export class CategoryGrid extends Component {
  render() {
    var {categories} = this.props;
    var renderIcons = () => 
     { //if empty show message
      //if not empty map over reviews and render a review
      
      return categories.map((category, index, arr) => {
        if((Math.floor(index/ROW_SIZE)% 2)==0){
          return(
            <SelectableCategoryIcon key={category} category={category} offset={true} />     
          );
        }else{
          return(
            <SelectableCategoryIcon key={category} category={category} offset={false} />     
          );
        }
      })
    }

    return(
      <div className="row small-up-3 medium-up-3 large-up-3">   
        {renderIcons()}
      </div>
  
    )
  }
}

//higher function component modifies the compoent before render provides route and data 
export default connect((state) => {
  return {categories: state.categories}
})(CategoryGrid);
