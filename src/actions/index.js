
export const CHANGE_ORIENTATION = 'CHANGE_ORIENTATION';
export const SET_ENTITY_IN_SELECT='SET_ENTITY_IN_SELECT';
export const TOGGLE_FIELD_CHECKBOX='TOGGLE_FIELD_CHECKBOX';
export const SET_CONTAIN_IN_FIELD='SET_CONTAIN_IN_FIELD';
export const SET_NOT_CONTAIN_IN_FIELD='SET_NOT_CONTAIN_IN_FIELD';




export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


export function toggleFieldCheckBox(idElement,idField) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: TOGGLE_FIELD_CHECKBOX,
    idElement,
    idField
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

export function setContain(idElement,idField,txt) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: SET_CONTAIN_IN_FIELD,
    idElement,
    idField,
    txt
  };
}

export function setNotContain(idElement,idField,txt) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: SET_NOT_CONTAIN_IN_FIELD,
    idField,
    idElement,
    txt
  };
}

export function changeOrientation(){
  return{
    type: CHANGE_ORIENTATION
  }
}