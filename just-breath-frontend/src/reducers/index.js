
import { SET_CURRENT_USER, FIND_CURRENT_USER} from '../actions/index.js';
import {ADD_BLOG_FAVORITES} from '../actions/favorite_blog_action';
import { combineReducers } from "redux";
import { usersReducer } from './users_reducer'
import { blogsReducer } from '../reducers/blogs_reducer.js';
import { exercisesReducer } from './exercises_reducer.js'

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {
    journal_entries: [],
    blogs: [],
    exercises: [],
    user_favorite_exercises: [],
    user_favorite_blogs: []
  }
};

export const favorite_blogs = DEFAULT_STATE.user.user_favorite_blogs || []

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!(Object.keys(action.user).length),
        user: action.user
      };
      case FIND_CURRENT_USER:
        return{
          isAuthenticated: true,
          user: action.user
        }
        case ADD_BLOG_FAVORITES:
        return {
          ...state,
          user: {...state.user, user_favorite_blogs:[...favorite_blogs, action.payload]}
        }
    default:
      return state;
  }

}

console.log(DEFAULT_STATE.isAuthenticated)


export default combineReducers({ 
  usersReducer,
  authReducer,
  blogsReducer,
  exercisesReducer,
 });

