export const ADD_BLOG_FAVORITES = "PATCH_FAVORITES";
const BASE_URL = 'http://localhost:3000/api/v1'

export const postBlogFavorites = (blog_id, user_id, jwtToken) => (
  dispatch
) => {
  console.log("fetching...");
  fetch(`${BASE_URL}/user_favorite_blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({blog_id, user_id }),
  })
    .then((res) => res.json())
    .then((favorite) => { 
      dispatch({
        type: ADD_BLOG_FAVORITES,
        payload: favorite,
      })
      console.log(favorite);
    });
}; //end
