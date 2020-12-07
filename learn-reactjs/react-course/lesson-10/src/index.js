import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MyComponent = props => {
  return <div>
  <h1>{props.text}</h1>
  <p>Welcome to our first react component.</p>
</div>
}

ReactDOM.render(<MyComponent text="Bye World"/>, document.getElementById('root'));
serviceWorker.unregister();