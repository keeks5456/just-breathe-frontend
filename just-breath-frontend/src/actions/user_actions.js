import axios from 'axios';
import { NEW_POST } from './types.js'
const BASE_URL = 'http://localhost:3000/api/v1'

// const headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearers ${token}`,
//   };

export function entryFormSubmit(content){
    return dispatch =>{
      return axios.post(`${BASE_URL}/journal_entries`, {
          content: content,
    })
    // .then(res => res.json())
    .then((content) => {
        // console.log(content)
        dispatch({
            type: 'NEW_POST',
            payload: content
        })     
    })
    // axios.post request for submitting and entry form for intro page and profile page
  }
}