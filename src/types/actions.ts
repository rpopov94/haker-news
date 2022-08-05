import {CommentsItemType, NewsItemType} from "./types";

export enum ActionTypes {
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
    FETCH_LIST_COMMENTS = 'FETCH_LIST_COMMENTS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    CLEAR_ALL_NEWS = 'CLEAR_ALL_NEWS',
    CLEAR_ALL_COMMENTS = 'CLEAR_ALL_COMMENTS',
    LOAD_NEWS= 'LOAD_NEWS',
    LOAD_COMMENTS = 'LOAD_COMMENTS',
    CATCH_ERROR = 'CATCH_ERROR'
}
interface FetchNewsSuccessAction {
    type: ActionTypes.FETCH_NEWS_SUCCESS;
    payload: Array<NewsItemType>;
    loading: boolean;
}
interface FetchNewsErrorAction {
    type: ActionTypes.FETCH_NEWS_ERROR;
    payload: string;
}

interface FetchListComments {
    type: ActionTypes.FETCH_LIST_COMMENTS;
    payload: CommentsItemType[];
    loading: boolean;
}

interface FetchCommentsError {
    type: ActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}

interface clearAllNewsAction {
    type: ActionTypes.CLEAR_ALL_NEWS;
    payload?: [];
}
interface clearCommentsAction{
    type: ActionTypes.CLEAR_ALL_COMMENTS;
    payload?: [];
}

interface loadNewsAction {
    type: ActionTypes.LOAD_NEWS;
    loading: boolean;
}

interface loadCommentsAction {
    type: ActionTypes.LOAD_COMMENTS;
    loading: boolean;
}

interface CatchErrorAction{ 
    type: ActionTypes.CATCH_ERROR;
    error?: string;
}

export type Actions =
    | FetchNewsErrorAction
    | FetchNewsSuccessAction
    | FetchListComments
    | FetchCommentsError
    | clearAllNewsAction
    | clearCommentsAction
    | loadNewsAction
    | loadCommentsAction
    | CatchErrorAction;