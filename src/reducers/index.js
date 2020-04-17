import { combineReducers } from 'redux';
import kawalcoronaReducer from './kawalcoronaReducer';
import papuaReducer from './papuaReducer';
import rsReducer from './rsReducer';
import globalReducer from './globalReducer';
import { positif, sembuh, meninggal } from './QueryPapuaReducer';

export default combineReducers({
    provinsi: kawalcoronaReducer,
    papua: papuaReducer,
    rumahsakit: rsReducer,
    global: globalReducer,
    positifquery: positif,
    sembuhquery: sembuh,
    meninggalquery: meninggal
});