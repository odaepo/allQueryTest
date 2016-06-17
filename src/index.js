import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

var redux = require('redux');

var queryMetaData={
    1:{
        id:1,
        idPArent: null,
        order: 1,
        entityId: null,
        times: 0,
        fieldToShow: {},
        treeWhere: {}
    }
}

var queryOptions={
    directionUI: 'horizontal'
}

var initialState={
    queryMetaData,
    queryOptions
};


//var store = require('configureStore').configure();
//var store = require('./store/configureStore.jsx').configure(initialState);

ReactDOM.render(
  <Provider store={createStore(reducers,initialState,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))}>
    <App />
  </Provider>
  , document.querySelector('.container'));
