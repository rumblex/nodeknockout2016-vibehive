import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActiveIcon extends Component {

  getIconPath(){
    return '/category_icons/ic_categories_hexagon_'
    +'yellow'+'/ic_'+this.props.category+'_yellow'
    +'/ic_'+this.props.category+'_yellow_'
  }


  render() {
    console.log(this.props.category);
      let smallest = this.getIconPath()+'32x32.png'
      let small = this.getIconPath()+'48x48.png'
      let medium = this.getIconPath()+'72x72.png'
      let large = this.getIconPath()+'96x96.png'
      return (
        <div>
          <img src={small} />
        </div>
      );
    }
 }



export default connect()(ActiveIcon)
