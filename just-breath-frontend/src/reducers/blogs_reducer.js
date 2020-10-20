import { FETCH_BLOG } from "../actions/user_blog_action";

const initialState = {
  blogs: [],
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};
