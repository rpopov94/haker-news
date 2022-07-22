import {NewsItemType} from "./types";

export enum NewsActionTypes {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
}
interface FetchAction {
    type: NewsActionTypes.FETCH_ITEMS
}
interface FetchSuccessAction {
    type: NewsActionTypes.FETCH_ITEMS_SUCCESS;
    payload: Array<NewsItemType>;
}
interface FetchErrorAction {
    type: NewsActionTypes.FETCH_ITEMS_ERROR;
    payload: string;
}

export type Actions =
    FetchAction
    | FetchErrorAction
    | FetchSuccessAction



