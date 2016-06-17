import { CHANGE_ORIENTATION } from '../actions/index';

export default function(state = null, action) {
    console.log(state);



    switch(action.type) {
        case CHANGE_ORIENTATION:
            if(state.directionUI=='horizontal'){
                console.log('app');
                return { ...state , directionUI: 'vertical'}
            }
            else {
                console.log('app2');
                return { ...state, directionUI: 'horizontal' };
            }
            break;
        case 'BOOK_SELECTED':
            if(state.directionUI=='horizontal')return { ...state , directionUI: 'horizontal'}
            else  return { ...state, directionUI: 'vertical' };
            break;
    }
//directionUI: 'horizontal' vertical



    return state;
}