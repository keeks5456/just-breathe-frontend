import { FETCH_EXERCISES } from "../actions/user_exercises_action";

const initialState = {
  exercises: [],
};

export const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISES:
      console.log("reducer");
      return {
        ...state,
        exercises: action.payload,
      };
    default:
      return state;
  }
};
