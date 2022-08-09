import {combineReducers} from "redux";
import {news_reducer} from "./news_reducer";


export const rootReducer = combineReducers({
    news: news_reducer,
})

export type RootState = ReturnType<typeof rootReducer>
