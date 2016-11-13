import React,{Component} from 'react';
import SelectableCategoryIcon from 'SelectableCategoryIcon';
import {connect} from 'react-redux'
const ROW_SIZE = 3

//allows for selection of up to 5 categories, but is agnostic about which active category array to update
//the props passed from the parent make it able to update any array with active categories
export class CategoryGrid extends Component {
  render() {
    var {categories} = this.props;
    var {activeCategories, onAddCategory, onRemoveCategory} = this.props;
    var renderIcons = () => 
     { 
      //render even rows with an offset
      return categories.map((category, index, arr) => {
        if((Math.floor(index/ROW_SIZE)% 2)==0){
          return(
            <SelectableCategoryIcon 
            key={category} 
            category={category} 
            currentlyActive={activeCategories} 
            onAddCategory={onAddCategory}
            onRemoveCategory={onRemoveCategory}
            offset={true} />     
          );
        }else{
          return(
            <SelectableCategoryIcon 
            key={category} 
            category={category} 
            currentlyActive={activeCategories} 
            onAddCategory={onAddCategory}
            onRemoveCategory={onRemoveCategory}
            offset={false} />     
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
