import { 
    FETCH_PAPUA,
    FETCH_INFOGRAFIK
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_PAPUA:
            return { ...state, ...action.payload };
        case FETCH_INFOGRAFIK:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }