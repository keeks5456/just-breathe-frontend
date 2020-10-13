import axios from 'axios';
import jwtDecode from 'jwt-decode';


export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const BASE_URL = 'http://localhost:3000/api/v1'

// const headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearers ${localStorage.token}`,
//   };

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function signup(userData) { //this handles a user signup
    console.log(userData)
  return dispatch => {
    return axios.post(`${BASE_URL}/users`, 
    {user: userData}
    );
  }
}

export function logout() { //this handles a user logout
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) { //this handles a user login
    // console.log(data)
  return dispatch => {
    return axios.post(`${BASE_URL}/login`, data).then(res => {
      const token = res.data.jwt;
      console.log(res)
      debugger
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(res.data.user));
    });
  }
}


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}