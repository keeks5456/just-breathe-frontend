export const ADD_EXERCISE_FAVORITES = 'ADD_EXERCISE_FAVORITES'

const BASE_URL = 'http://localhost:3000/api/v1'

export const postExerciseFavorites = (blog_id, user_id, jwtToken) => (dispatch) => {
    console.log('fetching..')
    fetch(`${BASE_URL}.user_favorite_exercises`, {
        method: 'POST',
        header:{
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({blog_id, user_id})
    })
    .then((res) => res.json())
    .then((exercise) =>{
        console.log('fetched?')
        dispatch({
            type: ADD_EXERCISE_FAVORITES,
            payload: exercise,
        })
        console.log(exercise)
    })
}