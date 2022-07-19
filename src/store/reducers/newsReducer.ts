import {NewsAction, NewsActionTypes, NewsItems, NewItem} from "../../types/news_types";

const initialStateNews: NewsItems = {
    news: [],
    error: null,
    loading: false
}

export const newsReducer = (state = initialStateNews, action: NewsAction): NewsItems => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS:
            return {...state, loading: true}
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return {...state, loading: false, news: action.payload}
        case NewsActionTypes.FETCH_NEWS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

const initialStateNewId: NewItem = {
    new_id: {},
    error: null,
    loading: false
}

export const newIdReducer = (state = initialStateNewId, action: NewsAction): NewItem => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS:
            return {...state, loading: true}
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return {...state, loading: false, new_id: action.payload}
        case NewsActionTypes.FETCH_NEWS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}