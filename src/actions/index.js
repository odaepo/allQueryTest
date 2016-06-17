
export const CHANGE_ORIENTATION = 'CHANGE_ORIENTATION';


export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}



export function changeOrientation(){
  return{
    type: CHANGE_ORIENTATION
  }
}