//require libs
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//load foundation
$(document).foundation();
//add the styling
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <p>VibeHive</p>
  </div>,
  document.getElementById('app')
);
