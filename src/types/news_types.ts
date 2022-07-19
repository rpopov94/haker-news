export interface NewsItems {
    news: any[];
    error: null| string;
    loading: boolean;
}

export enum NewsActionTypes {
    FETCH_NEWS = 'FETCH_NEWS',
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
}
interface FetchNewsAction {
    type: NewsActionTypes.FETCH_NEWS
}
interface FetchNewsSuccessAction {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS;
    payload: any[];
}
interface FetchNewsErrorAction {
    type: NewsActionTypes.FETCH_NEWS_ERROR;
    payload: string;
}

export type NewsAction =
    FetchNewsAction
    | FetchNewsErrorAction
    | FetchNewsSuccessAction

export interface NewItem {
    new_id: any;
    error: null| string;
    loading: boolean;
}

interface FetchNewIdAction {
    type: NewsActionTypes.FETCH_NEWS
}
interface FetchNewIdSuccessAction {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS;
    payload: any;
}
interface FetchNewIdErrorAction {
    type: NewsActionTypes.FETCH_NEWS_ERROR;
    payload: string;
}

export type NewIdAction =
    FetchNewIdAction
    | FetchNewIdErrorAction
    | FetchNewIdSuccessAction