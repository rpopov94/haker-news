import {
  RETRIEVE_STORIES
  } from "../actions/types";

const initialState = [];
function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_STORIES:
      return payload; 
    default:
      return tutorials;
  }
};
export default tutorialReducer;