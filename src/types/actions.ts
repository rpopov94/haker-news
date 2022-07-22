import {CommentsItemType, NewsItemType} from "./types";

export enum ActionTypes {
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
    FETCH_LIST_COMMENTS = 'FETCH_LIST_COMMENTS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}
interface FetchNewsSuccessAction {
    type: ActionTypes.FETCH_NEWS_SUCCESS;
    payload: Array<NewsItemType>;
}
interface FetchNewsErrorAction {
    type: ActionTypes.FETCH_NEWS_ERROR;
    payload: string;
}

interface FetchListComments {
    type: ActionTypes.FETCH_LIST_COMMENTS;
    payload: Array<CommentsItemType>;
}

interface FetchCommentsError {
    type: ActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}

export type Actions =
    | FetchNewsErrorAction
    | FetchNewsSuccessAction
    | FetchListComments
    | FetchCommentsError;


