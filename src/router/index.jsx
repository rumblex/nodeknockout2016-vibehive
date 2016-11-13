import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import VibeHive from 'VibeHive'
import CategoriesScreen from 'CategoriesScreen'
import ActivitiesScreen from 'ActivitiesScreen'
import LoginScreen from 'LoginScreen'
import ActivityForm from 'ActivityForm';
import SplashScreen from 'SplashScreen'
import firebase from 'firebase';
import ReduxModal from 'react-redux-modal'
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
    replace('/addactivity')
  }
  next();
};

export default (
  <div>
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    
    <Route path="/">
      //default index route takes you to choose your active
      <IndexRoute component={SplashScreen} />
        {/*Add Routes here */}
      <Route path="app" component={VibeHive}>
        <Route path="categories" component={CategoriesScreen} />
        <Route path="activities" component={ActivitiesScreen}/>
        <Route path="login" component={LoginScreen}/>
        <Route path="addactivity" component={ActivityForm} onEnter={requireLogin}/>
      </Route>
    </Route>
  </Router>
  <ReduxModal />
  </div>

)
