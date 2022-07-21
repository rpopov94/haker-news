import {CommentsAction, NewsAction, NewsActionTypes} from "../../types/news_types";
import {Dispatch} from "redux";

export const getComments = (ids: []) => {
    const urls: string[] = [];
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            ids.forEach((id) => {
                    urls.push(`https://api.hnpwa.com/v0/item/${id}.json`);
                }
            )
            const request = urls.map((url) => fetch(url))
            setTimeout(() => {
                    Promise.all(request)
                        .then((responses) => Promise.all(responses.map((response) => response.clone().json())))
                        .then((jsons) => jsons.forEach((json) => dispatch({
                            type: NewsActionTypes.FETCH_NEWS_SUCCESS,
                            payload: json
                        })));
                }, 200
            )
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: 'Произошла ошибка при загрузке списка комментариев.'
            })
        }

    }
};