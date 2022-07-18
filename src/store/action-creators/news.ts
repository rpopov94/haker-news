import {Dispatch} from "redux";
import axios from "axios";
import {NewsAction, NewsActionTypes} from "../../types/news_types";

export const fetchNews = () => {
    return async (dispatch: Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            const response = await axios.get('https://api.hnpwa.com/v0/news/1.json')
            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data})
            setInterval(() => {
                dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data})
                console.log('tic')
            }, 60000)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}