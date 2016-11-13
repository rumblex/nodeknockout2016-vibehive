import React, {Component} from 'react';
import {connect} from 'react-redux';
import ActiveIcon from 'ActiveIcon';

export class ActiveCategories extends Component {
   render() {
     let {activeCategories} = this.props;
     
     var renderIcons = () => 
       { //if empty show message
        //if not empty map over reviews and render a review
        return activeCategories.map((category) => {
          console.log("icon for " +category)
          return(
          <ActiveIcon key={category} category={category}/> 
          );
        });
      }
    
    return(
      <div className="button-bar">
      {renderIcons()}
      </div>
    )
  
  }
}

export default connect((state) => {
  return {activeCategories: state.activeCategories}
})(ActiveCategories);
