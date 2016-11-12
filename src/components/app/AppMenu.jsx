import React from 'react';
import {connect} from 'react-redux';

//TODO: replace this with hamburger menu

export var AppMenu = React.createClass({
    render: function() {
       return(
               <div className="top-bar stacked-for-medium">
                 <div className="menu" data-responsive-menu="accordion">
                   <div className="top-bar-left">
                     <ul className="menu">
                     
                     </ul>
                   </div>
                 </div>
               </div>
             );
    }
});
module.exports = AppMenu;
