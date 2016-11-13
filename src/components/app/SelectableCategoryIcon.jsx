import React, {Component} from 'react'
import {connect} from 'react-redux'
import { removeActiveCategory, addActiveCategory } from 'actions'
const MAX_ACTIVE = 5;

export class SelectableCategoryIcon extends Component {
  
  getIconPath(){
    let colour = this.isActive()? 'yellow' : 'white'
    return '/category_icons/ic_categories_hexagon_'
    +colour+'/ic_'+this.props.category+'_'+colour
    +'/ic_'+this.props.category+'_'+colour+'_'
  }

  //return if this category is one of the currently active categories
  isActive(){
    let self = this
    let matchedCategory = this.props.activeCategories.find((category) => {
      return category == self.props.category;
    });
    return matchedCategory? true : false ;
  }

  //is this icon clickable?
  isEnabled(){
    //its always clickable if its one of the active one - to allow it to be deselected
    return this.isActive()? true : this.props.activeCategories.length < MAX_ACTIVE ;
  }

  //add this category to the list of active ones, if there is space
  toggleActive(){
    if(this.isEnabled()){
      this.isActive()? this.props.dispatch(removeActiveCategory(this.props.category)) 
      : this.props.dispatch(addActiveCategory(this.props.category));
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    let self = this
    let currentMatch = this.props.activeCategories.find((category) => {
      return category == self.props.category;
    });

    let futureMatch = nextProps.activeCategories.find((category) => {
      return category == self.props.category;
    });
    
    return currentMatch != futureMatch;
  }

  render() {
    console.log(this.props.category);
      let small = this.getIconPath()+'32x32.png'
      let medium = this.getIconPath()+'72x72.png'
      let large = this.getIconPath()+'96x96.png'
    //offset is for the honeycomb styling
    if(this.props.offset){
      return (
        <div className="column honeycomb">
          <img src={large} onClick={this.toggleActive.bind(this)}/>
        </div>
      );
    }else{
      return (
        <div className="column">
          <img src={large} onClick={this.toggleActive.bind(this)}/>
        </div>
      );
    }
  }
}


export default connect((state) => {
  return {activeCategories: state.activeCategories}
})(SelectableCategoryIcon)
