import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';


import { arrayEntities } from '../metadataDBstructure.js'
import UIoptions from '../containers/ui_options';
import TreeElement from '../containers/treeElement';

class App extends Component {
  render() {

/*
 <BookDetail />
 <BookList />
 <UIoptions />
 <hr/>
 */
    return (
      <div>
          <UIoptions />
          <TreeElementContainer idElement={1}  />
      </div>
    );
  }
}



function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        queryOptions: state.queryOptions,
        queryMetaData:state.queryMetaData
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    //return bindActionCreators({changeOrientation: changeOrientation}, dispatch);
}



const TreeElementContainer = connect(
    mapStateToProps
)(TreeElement);

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(App);
