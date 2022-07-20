import {Dispatch} from "redux";
import axios from "axios";
import {NewIdAction, NewsAction, NewsActionTypes, NewsItems} from "../../types/news_types";

const NUMRER_PAGES = 4;

export const fetchNews = () => {
    const urls: string[] = [];
    return async (dispatch: Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            for (let i = 1; i <= NUMRER_PAGES; i++) {
                urls.push(`https://api.hnpwa.com/v0/news/${i}.json`);
            }
            const request = urls.map((url) => fetch(url))
            setTimeout(() =>{
                Promise.all(request)
                    .then((responses) => Promise.all(responses.map((response) => response.clone().json())))
                    .then((jsons) => jsons.forEach((json) => dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: json})));
                }, 200
            )
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
            setTimeout(() =>{
                const response = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then((response) => response.json())
                    .then((json) => dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: json}))
            }, 200)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: 'Произошла ошибка при загрузке новости.'
            })
        }
    }
}