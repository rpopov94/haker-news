import {Dispatch} from "redux";
import {Actions, NewsActionTypes} from "../../types/news_types";


export const getComments = (id: number): unknown => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: NewsActionTypes.FETCH_ITEMS})
        fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({type: NewsActionTypes.FETCH_ITEMS_SUCCESS, payload: json});
            })
            .catch((error) =>  dispatch({
                type: NewsActionTypes.FETCH_ITEMS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            }));
    };
};
