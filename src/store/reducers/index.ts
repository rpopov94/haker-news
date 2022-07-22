import {combineReducers} from "redux";
import {news_reducer, CommReducer} from "./news_reducer";


export const rootReducer = combineReducers({
    news: news_reducer,
    commit_id: CommReducer
})

export type RootState = ReturnType<typeof rootReducer>
