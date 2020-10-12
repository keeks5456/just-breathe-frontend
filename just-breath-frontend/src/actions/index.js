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

export function signup(userData) {
    console.log(userData)
  return dispatch => {
    return axios.post(`${BASE_URL}/users`, userData);
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
    // console.log(data)
  return dispatch => {
    return axios.post(`${BASE_URL}/login`, data).then(res => {
      const token = res.data.jwt;
      console.log(res)
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}


export function setCurrentUser(user) {

  return {
    type: SET_CURRENT_USER,
    user
  };
}