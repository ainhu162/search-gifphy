import * as Types from './../constants/ActionType';
var initialState = {
    images: [],
    totalCount: 0,
    loading: false
}

const images = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_IMAGES:
            return {
                ...state,
                loading: true
            }
        case Types.FETCH_IMAGES_SUCCESS:
            let images = action.payload.data.data.map(i => {
                return {id: i.id, url: i.images.original.url}
            })
            return {
                ...state,
                images: [...images],
                totalCount: action.payload.data.pagination.total_count,
                loading:false
            }
        case Types.FETCH_IMAGES_FAIL:
            return {
                ...state,
                loading: false
            }
        
        case Types.FETCH_MORE_IMAGES_SUCCESS:
            let res = action.payload.data.data.map(i => {
                return { id: i.id, url: i.images.original.url}
            })
            return {
                ...state,
                images: [...state.images,...res],
                loading: false
            }
        default : return {...state}
    }
}

export default images;