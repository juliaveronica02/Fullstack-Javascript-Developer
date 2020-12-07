* basic of react.js introduction.
* App.js: on the render(){return()} is looks a lot cleaner and readable and is call react elements and also called JSX.
* jsx code (edit on index.js):
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registeryServiceWorker from './registerServiceWorker';

const greeting = <h1>Hello World!</h1>

ReactDOM.render(greeting, document.getElementById('root'));
registeryServiceWorker();
```
* 1 simple function will return the current date (edit on index.js):
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registeryServiceWorker from './registerServiceWorker';

const getCurrentDate = () => { // = () => {} is arrow function (kind of syntax).
    const date = new.Date();
    return date.toDateString();
}

const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1> // referred function into jsx.

ReactDOM.render(greeting, document.getElementById('root'));
registeryServiceWorker();
```
* 2 simple function will return the current date (edit on index.js):
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registeryServiceWorker from './registerServiceWorker';

const getCurrentDate = function() { // = () => {} is arrow function (kind of syntax).
    const date = new Date();
    return date.toDateString();
}

const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1> // referred function into jsx.

ReactDOM.render(greeting, document.getElementById('root'));
registeryServiceWorker();
```
