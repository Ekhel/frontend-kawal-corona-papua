import { combineReducers } from 'redux';
import kawalcoronaReducer from './kawalcoronaReducer';

export default combineReducers({
    provinsi: kawalcoronaReducer
});