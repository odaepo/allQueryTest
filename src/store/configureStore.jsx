//Udemy_TheCompleteReactWebAppDeveloperCourse/react-10-21-redux-todosearch/app/store/configureStore.jsx



var redux = require('redux');
//var {searchTextReducer, showCompletedReducer, todosReducer} = require('../reducers');
var reducer=require('../reducers');



export var configure = (initialState = {}) => {
//  var reducer = redux.combineReducers({
//    searchText: searchTextReducer,
//    showCompleted: showCompletedReducer,
//    todos: todosReducer
//  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
