
import { SET_CURRENT_USER, FIND_CURRENT_USER } from '../actions/index.js';

import { combineReducers } from "redux";
import { usersReducer } from './users_reducer'
import { blogsReducer } from '../reducers/blogs_reducer.js';


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
    default:
      return state;
  }

}

console.log(DEFAULT_STATE.isAuthenticated)


export default combineReducers({ 
  usersReducer,
  authReducer,
  blogsReducer

 });

