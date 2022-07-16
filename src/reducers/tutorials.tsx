import {
    RETRIEVE_TUTORIALS
  } from "../actions/types";

const initialState = [];
function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_TUTORIALS:
      return payload; 
    default:
      return tutorials;
  }
};