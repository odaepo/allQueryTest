import { SET_ENTITY_IN_SELECT } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case 'SET_ENTITY_IN_SELECT':
            return state;
    }

    return state;
}