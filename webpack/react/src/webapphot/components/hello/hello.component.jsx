import * as React from 'react';
import logo from './assets/webpack-react-logo.png';
import './hello.scss';

const Hello = () => (
  <div className="hello">
    <div className="hello_image">
      <img src={logo} alt="webpack" />
    </div>
    <div className="hello_texts">
      <h1>Hello projext!</h1>
      <h2>Sample app using webpack and React</h2>
    </div>
  </div>
);

export default Hello;
