
export const FETCH_POST = 'FETCH_POST'

export const fetchBlogs = () => dispatch => {
    console.log('fetching...')
      fetch('http://localhost:3000/api/v1/blogs')
      .then(res => res.json())
      .then(blogs => 
        dispatch({
            type: FETCH_POST,
            payload: blogs
      })
    )
  }