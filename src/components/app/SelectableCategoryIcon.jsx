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
    let matchedCategory = this.props.currentlyActive.find((category) => {
      return category == self.props.category;
    });
    return matchedCategory? true : false ;
  }

  //is this icon clickable?
  isEnabled(){
    //its always clickable if its one of the active one - to allow it to be deselected
    return this.isActive()? true : this.props.currentlyActive.length < MAX_ACTIVE ;
  }

  //call the onAdd/Remove Category functions passed in as props
  toggleActive(){
    if(this.isEnabled()){
      this.isActive()? this.props.onRemoveCategory(this.props.category) 
      : this.props.onAddCategory(this.props.category);
    }
  }

//this prevents icons from rerendering when they haven't been clicked - (currentlyActive changing tries to trigger render)
  shouldComponentUpdate(nextProps, nextState){
    let self = this
    let currentMatch = this.props.currentlyActive.find((category) => {
      return category == self.props.category;
    });

    let futureMatch = nextProps.currentlyActive.find((category) => {
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
        <div className="columns small-2 honeycomb">
          <img src={large} onClick={this.toggleActive.bind(this)}/>
        </div>
      );
    }else{
      return (
        <div className="columns small-2">
          <img src={large} onClick={this.toggleActive.bind(this)}/>
        </div>
      );
    }
  }
}


export default connect()(SelectableCategoryIcon)
