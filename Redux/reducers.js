import {SET_ARTICLES} from './actions';

const initialState = {
    article: '',
}

function articleReducer(state = initialState, action){

    switch(action.type){
        case SET_ARTICLES:
            return { ...state, article: action.payload};
        default:
            return state;
    }
}

export default articleReducer;