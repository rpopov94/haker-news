import {Actions, NewsActionTypes, NewsItems} from "../../types/news_types";

const initialState: NewsItems = {
    news: [],
    error: null,
    loading: false
}

export const newsReducer = (state = initialState, action: Actions): NewsItems => {
    switch (action.type) {
        case NewsActionTypes.FETCH_ITEMS:
            return {...state, loading: true}
        case NewsActionTypes.FETCH_ITEMS_SUCCESS:
            return {...state, loading: false, news: action.payload}
        case NewsActionTypes.FETCH_ITEMS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
