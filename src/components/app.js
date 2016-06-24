import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';


import { arrayEntities } from '../metadataDBstructure.js'
import UIoptions from '../containers/ui_options';
import TreeElement from '../containers/treeElement';

export default class App extends Component {
  render() {
      //console.log(arrayEntities);
      //var props={};
      //props.id=1;
      //props.idParent=0;
      //props.order=0;
      //props.idEntity=0;
      //props.times=0;
      //props.fields={};
      //props.treeWhere={};
      //<TreeElement idElement={1}{... props}/>

      console.log(this.props);


    return (
      <div>
          <BookDetail />
          <BookList />
          <UIoptions />
          <hr/>
          <TreeElement idElement={1}/>
      </div>
    );
  }
}
