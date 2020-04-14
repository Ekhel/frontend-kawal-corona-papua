import kawalcorona from '../apis/kawalcorona';
import { FETCH_PROVINSI } from './types';

export const fetchProvinsi = () => async dispatch => {
    const response = await kawalcorona.get('/indonesia/provinsi/');

    dispatch({ type: FETCH_PROVINSI, payload: response.data });

}