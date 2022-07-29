import {Dispatch} from "redux";
import {Actions, ActionTypes} from "../../types/actions";

export const fetchNews = () => {
   
    const urls = [
        `https://api.hnpwa.com/v0/news/1.json`,
        `https://api.hnpwa.com/v0/news/2.json`,
        `https://api.hnpwa.com/v0/news/3.json`,
        `https://api.hnpwa.com/v0/news/4.json`
    ];
    const requests = urls.map((url) => fetch(url));
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionTypes.CLEAR_ALL_NEWS});
        try {
            dispatch({type: ActionTypes.LOAD_NEWS, loading: true})
            setTimeout(() => {
                Promise.all(requests)
                    .then((responses) => Promise.all(responses.map((response) => response.clone().json())))
                    .then((jsons) => jsons.forEach((json) => dispatch({type: ActionTypes.FETCH_NEWS_SUCCESS, loading:false, payload: json})));
            }, 200)
        } catch (e) {
            dispatch({
                type: ActionTypes.CATCH_ERROR,
                payload: 'Произошла ошибка при загрузке списка новостей!'
            })
        }
    }
}

export const getComments = (id: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionTypes.CLEAR_ALL_COMMENTS})
        setTimeout(() => {
            fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({type: ActionTypes.FETCH_LIST_COMMENTS, loading: false, payload: json});
            })
            .catch(() => dispatch({
                type: ActionTypes.FETCH_COMMENTS_ERROR,
                payload: 'Произошла ошибка при загрузке списка комментариев!'
            }));
        }, 200)  
    };
};