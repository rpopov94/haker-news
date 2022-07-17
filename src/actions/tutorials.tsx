import {
  RETRIEVE_STORIES, RETRIEVE_STORIES_ID
  } from "./types";
import TutorialDataService from "../services/TutorialService";
import { Dispatch } from 'redux';



export const retrieveTutorials = () => async (dispatch: Dispatch) => {
  try {
    const res = await TutorialDataService.getAll();
    console.log('res=> ', res);
    dispatch({
      type: RETRIEVE_STORIES,
      payload: res,
    });
  } catch (err) {
    
  }
};

export const retrieveTutorialsById = (id) => async (dispatch: Dispatch) => {
  try {
    const res = await TutorialDataService.get(id);
    dispatch({
      type: RETRIEVE_STORIES_ID,
      payload: res,
    });
  } catch (err) {
   
  }
};