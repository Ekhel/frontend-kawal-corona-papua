import { 
    FETCH_PROVINSI,
    FETCH_GLOBAL
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_PROVINSI:
            return { ...state, ...action.payload };
        case FETCH_GLOBAL:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }