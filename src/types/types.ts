export interface StateType {
    news: Array<NewsItemType>;
    comments: Array<CommentsItemType>;
    data?: {
        news: Array<NewsItemType>;
        comments: Array<CommentsItemType>;
    };
}

export interface NewsItemType {
    error: null,
    loading: false,
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