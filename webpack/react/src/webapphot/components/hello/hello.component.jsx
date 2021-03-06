import * as React from 'react';
import logo from './assets/webpack-react-logo.png';
import './hello.scss';
/**
 * Show a simple _"Hello message"_.
 * @return {Object}
 */
const Hello = ({ title }) => (
  <div className="hello">
    <div className="hello_image">
      <img src={logo} alt="webpack" />
    </div>
    <div className="hello_texts">
      <h1>{title}</h1>
      <h2>Sample app using webpack and React (HMR)</h2>
    </div>
  </div>
);

export default Hello;
