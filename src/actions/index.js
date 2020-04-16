import kawalcorona from '../apis/kawalcorona';
import kawalcoronapapua from '../apis/kawalcoronapapua';
import { 
    FETCH_PROVINSI, 
    FETCH_PAPUA, 
    FETCH_GLOBAL,
    FETCH_INFOGRAFIK
} from './types';

export const fetchProvinsi = () => async dispatch => {
    const response = await kawalcorona.get('/indonesia/provinsi/');

    dispatch({ type: FETCH_PROVINSI, payload: response.data });

}

export const fetchPapua = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/penderita/');

    dispatch({ type: FETCH_PAPUA, payload: response.data.results });
}

export const fetchInfoGrafikPapua = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/informasi/');

    dispatch({ type: FETCH_INFOGRAFIK, payload: response.data.results });
}

export const fetchGlobal = () => async dispatch => {
    const response = await kawalcorona.get('/api/');

    dispatch({ type: FETCH_GLOBAL, payload: response.data });
}