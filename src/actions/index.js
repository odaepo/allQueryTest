
export const CHANGE_ORIENTATION = 'CHANGE_ORIENTATION';
export const SET_ENTITY_IN_SELECT='SET_ENTITY_IN_SELECT';

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


export function setEntityInSelect(id,idEntity) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: 'SET_ENTITY_IN_SELECT',
    id,
    idEntity
  };
}


export function changeOrientation(){
  return{
    type: CHANGE_ORIENTATION
  }
}