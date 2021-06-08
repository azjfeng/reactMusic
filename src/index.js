import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.less'
import './style/index.less'
const name = 'Josh Perez';
const element = <p>Hello, {name}</p>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
