import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import VibeHive from 'VibeHive'
import CategoriesScreen from 'CategoriesScreen'
import ActivitiesScreen from 'ActivitiesScreen'
import LoginScreen from 'LoginScreen'
//middleware for auth
var requireLogin = (nextState, replace, next) => {
  //check if user is logged in
  if(!firebase.auth().currentUser) {
    replace('/login')
  }
  next();
};

//if logged in
var redirectLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/')
  }
  next();
};

export default (
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    <Route path="/" component={VibeHive}>
      //default index route takes you to choose your active
      <IndexRoute component={CategoriesScreen} />
        {/*Add Routes here */}
      <Route path="/categories" component={CategoriesScreen} />
      <Route path="/activities" component={ActivitiesScreen}/>
      <Route path="/login" component={LoginScreen}/>
    </Route>
  </Router>
)
