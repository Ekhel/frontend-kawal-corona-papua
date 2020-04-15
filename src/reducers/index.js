import { combineReducers } from 'redux';
import kawalcoronaReducer from './kawalcoronaReducer';
import papuaReducer from './papuaReducer';

export default combineReducers({
    provinsi: kawalcoronaReducer,
    papua: papuaReducer
});