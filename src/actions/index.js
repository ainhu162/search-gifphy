import * as Types from './../constants/ActionType';
import http from './../services/http';
import { toast } from 'react-toastify';

const _http = new http();
export const actFetchImagesRequest = (url) => {
    return (dispatch) => {
        dispatch(actFetchImages())
        return _http.get(url).then(res => {
            if(res.data.data.length === 0 ){
                toast.error('No image found');
            }
            dispatch(actFetchImagesSuccess(res));
        }).catch(err => {
            toast.error(err.message);
            dispatch(actFetchImagesFail())
        });
    }
}
export const actFetchImages = () => {
    return {
        type: Types.FETCH_IMAGES
    }
}
export const actFetchImagesSuccess = payload => {
    return {
        type: Types.FETCH_IMAGES_SUCCESS,
        payload
    }
} 
export const actFetchImagesFail = () => {
    return {
        type:Types.FETCH_IMAGES_FAIL
    }
}
export const actFetchMoreImagesRequest = url => {
    return dispatch => {
        dispatch(actFetchImages())
        return _http.get(url).then(res => {
            dispatch(actFetchMoreImagesSuccess(res));
        }).catch(err => {
            toast.error(err.message);
            dispatch(actFetchImagesFail())
        });
    }
}

export const actFetchMoreImagesSuccess = payload => {
    return {
        type: Types.FETCH_MORE_IMAGES_SUCCESS,
        payload
    }
} 

export const actAddFavorite = payload => {
    return {
        type: Types.ADD_FAVORITE,
        payload
    }
}

export const actRemoveFavorite = payload => {
    return {
        type: Types.REMOVE_FAVORITE,
        payload
    }
}