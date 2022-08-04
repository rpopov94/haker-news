export interface StateType {
    news: NewsItemType[];
    comments: CommentsItemType[];
    error: string;
    loading: boolean;
    data?: {
        news: NewsItemType[];
        comments: CommentsItemType[];
    };
}

export interface NewsItemType {
    id: number;
    index: number;
    title: string;
    url: string;
    points: number;
    user: string;
    time: number;
    comments_count?: number;
}

export interface CommentsItemType {
    id?: number;
    type?: string;
    title?: string;
    points?: number;
    user?: string;
    time?: number;
    content?: string;
    comments?: CommentsItemType[];
}