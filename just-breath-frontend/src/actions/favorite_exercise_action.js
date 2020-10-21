export const ADD_EXERCISE_FAVORITES = "ADD_EXERCISE_FAVORITES";

const BASE_URL = "http://localhost:3000/api/v1";

export const postExerciseFavorites = (exercise_id, user_id, jwtToken) => (
  dispatch
) => {
  console.log("fetching..", user_id, exercise_id);
  fetch(`${BASE_URL}/user_favorite_exercises/${user_id}/${exercise_id}`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({ user_favorite_exercises: {exercise_id: exercise_id, user_id: user_id} }),
  })
    .then((res) => res.json())
    .then((exercise) => {
      console.log("fetched?");
      dispatch({
        type: ADD_EXERCISE_FAVORITES,
        payload: exercise,
      });
    });
};
