import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

ReactDOM.hydrate(
  <HelloWorld name={window.__INITIAL__DATA__.name} />,
  document.getElementById('root')
);
