import { 
    FETCH_PAPUA_POSITIF,
    FETCH_PAPUA_SEMBUH,
    FETCH_PAPUA_MENINGGAL
 } from '../actions/types';

 export const positif =  (state = {}, action) => {
    if (action.type === FETCH_PAPUA_POSITIF) {
        return action.payload;
    }

    return positif;
 }

export const sembuh =  (state = {}, action) => {
    if (action.type === FETCH_PAPUA_SEMBUH) {
        return action.payload;
    }

    return sembuh;
 }

 export const meninggal =  (state = {}, action) => {
    if (action.type === FETCH_PAPUA_MENINGGAL) {
        return action.payload;
    }

    return meninggal;
 }