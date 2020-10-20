import { PATCH_BLOG_FAVORITES } from "../actions/favorite_blog_action";

const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type){
    case PATCH_BLOG_FAVORITES:
      console.log("reducer");
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};
