import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const greeting = <h1>Hello World!</h1>

ReactDOM.render(greeting, document.getElementById('root'));
serviceWorker.unregister();