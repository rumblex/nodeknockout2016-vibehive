
//import react
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider}  from 'react-redux'
//remember trailing slash
import router from 'src/router/'

//load foundation
$(document).foundation();

var store = require('configureStore').configure();

//app css require
require('style!css!sass!applicationStyles');

//offline plugin
require('offline-plugin/runtime').install();


//Create our Router
ReactDOM.render(    //pass two args, JSX and the app element
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app') //where to render
);
