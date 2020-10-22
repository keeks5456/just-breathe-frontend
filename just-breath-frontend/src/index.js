import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import jwtDecode from 'jwt-decode';
import { setCurrentUser,setAuthorizationToken, findCurrentUser } from './actions';


import './App.css';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

  if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    // find the current user 
    // store.dispatch(findCurrentUser(jwtDecode(localStorage.jwtToken)))
    store.dispatch(findCurrentUser(localStorage.jwtToken))
    // set the current user
    // store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    // store.dispatch(setCurrentUser(localStorage.jwtToken)); //was setting the token not whole user
  } catch(e) {
    store.dispatch(setCurrentUser({}))
  }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);
  
  

  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
