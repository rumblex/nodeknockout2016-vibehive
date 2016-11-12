import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import VibeHive from 'VibeHive'
import CategoriesScreen from 'CategoriesScreen'
import ActivitiesScreen from 'ActivitiesScreen'

export default (
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    <Route path="/" component={VibeHive}>
      //default index route takes you to choose your active
      <IndexRoute component={CategoriesScreen} />
        {/*Add Routes here */}
      <Route path="/categories" component={CategoriesScreen} />
      <Route path="/activities" component={ActivitiesScreen}/>
    </Route>
  </Router>
)
