import React, {Component} from 'react'
import {connect} from 'react-redux'

export class SelectableCategoryIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive:false
    }
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
    //add dispatch to act on touch events
    var {category, path_white, path_yellow} = this.props;
    return (
      <div>
        <ImageResponsive type="image" src={path_white} width="50%" height="200px" onClick={this.toggleActive.bind(this)}>
            <Source src="http://placehold.it/1600x300" maxWidth={1600}/>
            <Source src="http://placehold.it/300x300"  maxWidth={300}/>
            <Source src="http://placehold.it/500x300"  maxWidth={500}/>
            <Source src="http://placehold.it/800x300"  maxWidth={800}/>
            <Source src="http://placehold.it/1000x300" maxWidth={1000}/>
        </ImageResponsive>
      </div>
    );
  }
}


export default connect()(SelectableCategoryIcon)
