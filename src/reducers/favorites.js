import * as Types from './../constants/ActionType';

const favorites = (state = [], action) => {
    switch(action.type) {
        case Types.ADD_FAVORITE:
            return [...state, {...action.payload}]
        case Types.REMOVE_FAVORITE:
            return state.filter(x => x.id !== action.payload.id)
        default : return [...state]  
    }  
}

export default favorites;