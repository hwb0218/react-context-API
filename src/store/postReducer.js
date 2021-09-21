import { SET_POST_LIST } from "./types";

export const initailState = {
  postList: [],
};

export const setPostList = (postList) => ({
  type: SET_POST_LIST,
  payload: postList,
});

export const postReducer = (state = initailState, action) => {
  switch (action.type) {
    case SET_POST_LIST:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
};
