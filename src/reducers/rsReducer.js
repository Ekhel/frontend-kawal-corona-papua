import { 
    FETCH_RUMAHSAKIT
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_RUMAHSAKIT:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }