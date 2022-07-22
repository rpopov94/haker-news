import {Actions, ActionTypes,} from "../../types/actions";
import {NewsItemType, StateType} from "../../types/types";


const initialState: StateType = {
    news: [],
    comments: [],
    error: null,
    loading: true,
}

export const reducer = (state = initialState, action: Actions): StateType => {
    switch (action.type) {
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
                        else return Number(null);
                    })
                    .slice(0, 100);
                return {...newState, news: newArrayNews};
            }

            return {...newState};
        }
        case ActionTypes.FETCH_LIST_COMMENTS: {
            const newState = { ...state };
            if (action.payload) {
                newState.comments = action.payload;
            }

            return newState;
        }
        default:
            return state;
    }
}
