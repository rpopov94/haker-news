import {Dispatch} from "redux";
import axios from "axios";
import {Actions, NewsActionTypes} from "../../types/news_types";

export const fetchNews = () => {
    return async (dispatch: Dispatch<Actions>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_ITEMS})
            const response = await axios.get('https://api.hnpwa.com/v0/news/1.json')
            dispatch({type: NewsActionTypes.FETCH_ITEMS_SUCCESS, payload: response.data})
            setInterval(() => {
                dispatch({type: NewsActionTypes.FETCH_ITEMS_SUCCESS, payload: response.data})
            }, 60000)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_ITEMS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}

