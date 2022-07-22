import {
    Actions,
    NewsActionTypes,
} from "../../types/actions";
import {NewsItemType, StateType} from "../../types/types";


const initialState: StateType = {
    news: [],
    comments: []
}

export const news_reducer = (state = initialState, action: Actions): StateType => {
    switch (action.type) {
        case NewsActionTypes.FETCH_ITEMS_SUCCESS: {
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

        default:
            return state;
    }
}
