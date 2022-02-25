export const SET_ARTICLES = 'SET_ARTICLES';

export const setArticles = article => dispatch =>{
    dispatch({
        type: SET_ARTICLES,
        payload: article,
    });
};