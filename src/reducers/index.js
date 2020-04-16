import { combineReducers } from 'redux';
import kawalcoronaReducer from './kawalcoronaReducer';
import papuaReducer from './papuaReducer';
import rsReducer from './rsReducer';
import globalReducer from './globalReducer';

export default combineReducers({
    provinsi: kawalcoronaReducer,
    papua: papuaReducer,
    rumahsakit: rsReducer,
    global: globalReducer
});