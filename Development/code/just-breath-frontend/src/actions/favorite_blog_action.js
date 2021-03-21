export const ADD_BLOG_FAVORITES = "ADD_BLOG_FAVORITES";
const BASE_URL = 'http://localhost:3000/api/v1'

export const postBlogFavorites = (blog_id, user_id, jwtToken) => (
  dispatch
) => {
  fetch(`${BASE_URL}/user_favorite_blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({blog_id, user_id}),
  })
    .then((res) => res.json())
    .then((blog) => { 
      dispatch({
        type: ADD_BLOG_FAVORITES,
        payload: blog,
      })
    });
}; //end
