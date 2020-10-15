import axios from 'axios';

export const NEW_POST = 'NEW_POST'

const BASE_URL = 'http://localhost:3000/api/v1'

export function entryFormSubmit(content){
  return dispatch =>{
    return axios.post(`${BASE_URL}/journal_entries`, content)
    .then(res => {debugger
      // dispatch(newPost(res.data.content))
    })
  }
}

export function newPost(content){
  console.log(content)
  return {
    type: NEW_POST,
    content: content
  }
}

