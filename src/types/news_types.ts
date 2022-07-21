export interface NewsItems {
    news: any[];
    error: null| string;
    loading: boolean;
}

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
    payload: any[];
}
interface FetchErrorAction {
    type: NewsActionTypes.FETCH_ITEMS_ERROR;
    payload: string;
}

export type Actions =
    FetchAction
    | FetchErrorAction
    | FetchSuccessAction

export interface LoadingState {
    loading: boolean;
    loadingStatus?: {
        loading: boolean;
    };
}

export interface NewsItemType {
    id?: number;
    index?: number;
    title: string;
    url?: string;
    points: number;
    user: string;
    time: number;
    commentsCount?: number;
}

export interface CommentsItemType {
    id: number;
    type: string;
    title: string;
    points: number;
    user: string;
    time: number;
    content: string;
    comments: Array<CommentsItemType>;
}
