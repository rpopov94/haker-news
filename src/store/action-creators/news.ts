import {Dispatch} from "redux";
import axios from "axios";
import {NewIdAction, NewsAction, NewsActionTypes, NewsItems} from "../../types/news_types";

export const fetchNews = () => {
    return async (dispatch: Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            const response = await axios.get('https://api.hnpwa.com/v0/news/1.json')
            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data})
            setInterval(() => {
                dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data})
            }, 60000)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: 'Произошла ошибка при загрузке списка новостей.'
            })
        }
    }
}

export const fetchNewsById = (id: string | undefined) => {
    return async (dispatch: Dispatch<NewIdAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            const response = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data})
            setInterval(() => {
                dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data})
            }, 60000)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: 'Произошла ошибка при загрузке новости.'
            })
        }
    }
}