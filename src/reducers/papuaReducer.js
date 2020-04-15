import { 
    FETCH_PAPUA
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_PAPUA:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }