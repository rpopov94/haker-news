import {combineReducers} from "redux";
import {newsReducer, newIdReducer} from "./newsReducer";

export const rootReducer = combineReducers({
    news: newsReducer,
    new_id: newIdReducer
})

export type RootState = ReturnType<typeof rootReducer>
