import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import entry_reducer from './reducers/entry_reducer'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// here we will be keeping our store data 
// we need to use provider to pass in our store data to the other components
// we are importing entry_reducer because thats where ur stored entries willl live

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
