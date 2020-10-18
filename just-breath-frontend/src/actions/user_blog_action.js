export const FETCH_BLOG = "FETCH_BLOG";

export const fetchBlogs = () => (dispatch) => {
  fetch("http://localhost:3000/api/v1/blogs")
    .then((res) => res.json())
    .then((blogs) => dispatch({
        type: FETCH_BLOG,
        payload: blogs,
      })
    );
};
