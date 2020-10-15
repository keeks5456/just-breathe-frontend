import axios from 'axios';
import jwtDecode from 'jwt-decode';


export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FIND_CURRENT_USER = 'FIND_CURRENT_USER';
const BASE_URL = 'http://localhost:3000/api/v1'



export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function signup(userData) { //this handles a user signup

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
  return dispatch => {
    return axios.post(`${BASE_URL}/login`, data)
    .then(res => {
      const token = res.data.jwt;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(res.data.user));



    });
  }
}

export function findCurrentUser(token) {
  return dispatch =>{
    return axios.post(`${BASE_URL}/currentUser`, token)
    .then(res => console.log(res.data.json))
    .then(user => dispatch(setCurrentUser(user)))
  }
}


export function setCurrentUser(user) {
  console.log(user)
  return {
    type: SET_CURRENT_USER,
    user: user
  };
}