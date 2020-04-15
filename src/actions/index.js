import kawalcorona from '../apis/kawalcorona';
import kawalcoronapapua from '../apis/kawalcoronapapua';
import { FETCH_PROVINSI, FETCH_PAPUA } from './types';

export const fetchProvinsi = () => async dispatch => {
    const response = await kawalcorona.get('/indonesia/provinsi/');

    dispatch({ type: FETCH_PROVINSI, payload: response.data });

}

export const fetchPapua = () => async dispatch => {
    const response = await kawalcoronapapua.get('/api/penderita/');

    dispatch({ type: FETCH_PAPUA, payload: response.data.results });
}