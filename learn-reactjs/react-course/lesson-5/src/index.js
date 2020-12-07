import React from 'react'; // react library: without it we won't be able to create the elements.
import ReactDOM from 'react-dom'; // render our app.
import './index.css'; // simple css file.
import App from './App'; // is the app component which currently rendering.
import * as serviceWorker from './serviceWorker'; // let the app load faster on subsequent visits in production.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // on public folder (html file).
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
