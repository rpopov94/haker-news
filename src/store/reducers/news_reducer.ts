import {Actions, ActionTypes,} from "../../types/actions";
import {NewsItemType, StateType} from "../../types/types";


const initialState: StateType = {
    news: [],
    comments: [],
    error: '',
    loading: false,
}

export const news_reducer = (state = initialState, action: Actions): StateType => {
    switch (action.type) {
        case ActionTypes.LOAD_NEWS: {
            const newState = {...state};
            return {...newState, loading: false};
        }
        case ActionTypes.CLEAR_ALL_NEWS:{
            return {
                news: [],
                comments: [],
                error: '',
                loading: true
            };
        }
        case ActionTypes.FETCH_NEWS_SUCCESS: {
            const newState = {...state};
            if (action.payload) {
                newState?.news?.push(...action.payload);
            }
            if (newState.news && newState.news.length > 100) {
                const newArrayNews = newState.news
                    .filter((item, index) => newState.news.indexOf(item) === index)
                    .sort(function (a: NewsItemType, b: NewsItemType): number {
                        if (a.time && b.time) return b.time - a.time;
                        else return 0;
                    })
                    .slice(0, 100);
                return {...newState, news: newArrayNews};
            }

            return {...newState};
        }

        case ActionTypes.LOAD_COMMENTS: {
            return {comments: [], error: "", news: [], loading: true};
        }
        case ActionTypes.FETCH_LIST_COMMENTS: {
           return {comments: action.payload, error: "", loading: false, news: []}
        }
        case ActionTypes.CLEAR_ALL_COMMENTS:{
            return {
                news: [],
                comments: [],
                error: '',
                loading: true
            };
        }

        case ActionTypes.CATCH_ERROR:{
            const newState = {...state};
            return {...newState, error: 'Вы словили ошибку!'};
        }

        default:
            return state;
    }
}