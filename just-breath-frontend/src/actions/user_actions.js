
export const NEW_POST = 'NEW_POST'

const BASE_URL = 'http://localhost:3000/api/v1'

export const createNewEntry = (entryData, jwtToken) => dispatch => {
  console.log(entryData)
  fetch(`${BASE_URL}/journal_entries`,{
    method: `POST`,
    headers:{
     'content-type':'application/json',
     'Authorization': `Bearer ${jwtToken}`
  },
  body: JSON.stringify(entryData)
  })
  .then(res => res.json())
  .then(content => {
    dispatch({
      type: NEW_POST,
      payload: content
    })
    console.log("Content created ")
  })
}
