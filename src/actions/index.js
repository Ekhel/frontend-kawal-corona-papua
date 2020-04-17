import kawalcorona from '../apis/kawalcorona';
import kawalcoronapapua from '../apis/kawalcoronapapua';
import { 
    FETCH_PROVINSI, 
    FETCH_PAPUA,
    FETCH_PAPUA_SEMBUH,
    FETCH_PAPUA_MENINGGAL,
    FETCH_PAPUA_POSITIF, 
    FETCH_GLOBAL,
    FETCH_INFOGRAFIK,
    FETCH_RUMAHSAKIT
} from './types';

export const fetchProvinsi = () => async dispatch => {
    const response = await kawalcorona.get('/indonesia/provinsi/');

    dispatch({ type: FETCH_PROVINSI, payload: response.data });

}

export const fetchPapua = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/penderita/');

    dispatch({ type: FETCH_PAPUA, payload: response.data });
}

export const fetchPapuaSembuh = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/penderita/?search=Sembuh');

    dispatch({ type: FETCH_PAPUA_SEMBUH, payload: response.data });
}

export const fetchPapuaMeniggal = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/penderita/?search=Meninggal');

    dispatch({ type: FETCH_PAPUA_MENINGGAL, payload: response.data });
}

export const fetchPapuaPositif = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/penderita/?search=Positif');

    dispatch({ type: FETCH_PAPUA_POSITIF, payload: response.data });
}

export const fetchInfoGrafikPapua = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/informasi/');

    dispatch({ type: FETCH_INFOGRAFIK, payload: response.data });
}

export const fetchGlobal = () => async dispatch => {
    const response = await kawalcorona.get('/api/');

    dispatch({ type: FETCH_GLOBAL, payload: response.data });
}

export const fetchRumahSakit = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/rumahsakit/');

    dispatch({ type: FETCH_RUMAHSAKIT, payload: response.data });
}