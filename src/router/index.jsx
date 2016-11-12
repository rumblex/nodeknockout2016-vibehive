import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import VibeHive from 'VibeHive'
import CategoriesScreen from 'CategoriesScreen'

export default (
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    <Route path="/" component={VibeHive}>
      //default index route takes you to choose your active categories
      <IndexRoute component={CategoriesScreen} />
        {/*Add Routes here */}
       
    </Route>
  </Router>
)
