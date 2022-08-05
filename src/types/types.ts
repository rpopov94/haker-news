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
    id: string;
    user: string;
    title: string;
    points: string;
    url: string;
    content: string;
    time: number;
    comments: CommentsItemType[];
    comments_count: number;
}