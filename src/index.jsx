import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'mobx-react';
//import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// don't need the varible style, is there another cleaner way
// to get webpack to build scss
// import style from './scss/style.scss';



import App from './components/App.jsx';


import style from './scss/style.scss';


//pass in TwitchService as 


render(
  (
    <App />
  ),
  document.getElementById('app')
);



