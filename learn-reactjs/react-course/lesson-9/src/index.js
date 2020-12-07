import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MyComponent = () => {
  return <div>
  <h1>Hello World!</h1>
  <p>Welcome to our first react component.</p>
</div>
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
serviceWorker.unregister();