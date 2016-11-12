import React from 'react';
import {connect} from 'react-redux';
var CategoriesScreen = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        Categories Screenzzzz
      </div>
    )
  }
});

export default connect()(CategoriesScreen);