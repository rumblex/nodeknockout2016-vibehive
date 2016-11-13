import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as burgerMenu} from 'redux-burger-menu';
import {reducer as modalReducer} from 'react-redux-modal'
//import reducers here
import {categoriesReducer, activeCategoriesReducer, vibesReducer, authReducer, preLoadedReducer, activeTagsReducer} from 'reducers';
export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    categories: categoriesReducer,
    activeCategories: activeCategoriesReducer,
    activeTags: activeTagsReducer,
    burgerMenu: burgerMenu,
    vibes: vibesReducer,
    auth: authReducer,
    isPreloaded: preLoadedReducer,
    modals: modalReducer,
  });

  var store = redux.createStore(reducer, initialState,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
