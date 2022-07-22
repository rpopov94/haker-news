import {Dispatch} from "redux";
import {Actions, NewsActionTypes} from "../../types/actions";

export const fetchNews = () => {
    const urls = [
        `https://api.hnpwa.com/v0/news/1.json`,
        `https://api.hnpwa.com/v0/news/2.json`,
        `https://api.hnpwa.com/v0/news/3.json`,
        `https://api.hnpwa.com/v0/news/4.json`
    ];
    const requests = urls.map((url) => fetch(url));

    return async (dispatch: Dispatch<Actions>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_ITEMS})
            setTimeout(() => {
                Promise.all(requests)
                    .then((responses) => Promise.all(responses.map((response) => response.clone().json())))
                    .then((jsons) => jsons.forEach((json) => dispatch({type: NewsActionTypes.FETCH_ITEMS_SUCCESS, payload: json})));
            }, 100)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_ITEMS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}
