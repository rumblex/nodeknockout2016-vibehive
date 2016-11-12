import React, {Component} from 'react'
import {connect} from 'react-redux'
import ImageResponsive, {Source} from 'react-image-responsive';

export class SelectableCategoryIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive:false
    }
  }

  getIconPath(){
    let colour;
    if(this.state.isActive){
      colour='yellow';
    }else{
      colour='white';
    }
    
    return '/category_icons/ic_categories_hexagon_'+colour+'/ic_'+this.props.category+'_'+colour+'/ic_'+this.props.category+'_'+colour+'_'
  }

  toggleActive(){
    if(this.state.isActive){
      this.setState({isActive: false});
    }else{
      this.setState({isActive: true});
    }
    console.log(this.state.isActive);
  }


  render() {
      let small = this.getIconPath()+'32x32.png'
      let medium = this.getIconPath()+'72x72.png'
      let large = this.getIconPath()+'96x96.png'
    //add dispatch to act on touch events
    return (
      <div>
        <img src={medium} />
      </div>
    );
  }
}


export default connect()(SelectableCategoryIcon)
