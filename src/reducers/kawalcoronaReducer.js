import _ from 'lodash';
import { 
    FETCH_PROVINSI
 } from '../actions/types';

 export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_PROVINSI:
            return { ...state, ...action.payload };
        default:
            return state;
     }
 }