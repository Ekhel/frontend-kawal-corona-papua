import { 
    FETCH_GLOBAL
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_GLOBAL:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }