import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

import QueryMetaData from'./reducer_query_meta_data'
import QueryOptions from './reducer_query_options'
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,

  queryOptions: QueryOptions,
  queryMetaData:  QueryMetaData

});

export default rootReducer;
