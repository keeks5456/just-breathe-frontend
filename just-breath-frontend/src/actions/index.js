import axios from 'axios'

const URL = 'http://localhost:3000/api/v1/users'

const fetchUsersRequest = () =>{
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

const fetchUsersSuccess = users =>{
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

const fetchUsersFailures = error =>{
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}

export const fetchUser = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
       axios.get(URL)
       .then(res => {
           const user = res.data
           console.log(user)
           dispatch(fetchUsersSuccess(user))
           //response.data is the arrayy of users 
       }) 
       .catch(error => {
           dispatch(fetchUsersFailures(error.message))
           //error.message gives description of error
       })
    }
}

export default {fetchUsersRequest, fetchUser}