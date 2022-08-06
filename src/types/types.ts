export interface StateType {
    news: NewsItemType[];
    comments: CommentsItemType[];
    error: string;
    loading: boolean;
}

export interface NewsItemType {
    time_ago: string;
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
    user?: string;
    title?: string;
    points?: string;
    url?: string;
    content?: string;
    comments: CommentsItemType[];
    comments_count?: number;
    time_ago: string;
}