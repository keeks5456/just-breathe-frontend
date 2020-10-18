export const FETCH_EXERCISES = "FETCH_EXERCISES";

export const fetchExercises = () => (dispatch) => {
  console.log("fetching...");
  fetch("http://localhost:3000/api/v1/exercises")
    .then((res) => res.json())
    .then((exercises) => dispatch({
        type: FETCH_EXERCISES,
        payload: exercises
    })
    );
};
