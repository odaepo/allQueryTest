import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';


import { arrayEntities } from '../metadataDBstructure.js'
import UIoptions from '../containers/ui_options';


export default class App extends Component {
  render() {
      console.log(arrayEntities);
    return (
      <div>
          <BookDetail />
          <BookList />
          <UIoptions />

      </div>
    );
  }
}
