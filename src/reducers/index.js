import { combineReducers } from 'redux';
import images from './images';
import favorites from './favorites';

const appReducers = combineReducers({
    images,
    favorites
})

export default appReducers;