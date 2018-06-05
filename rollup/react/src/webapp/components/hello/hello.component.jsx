import React from 'react';
import logo from './assets/rollup-react-logo.png';
import './hello.scss';
/**
 * Show a simple _"Hello message"_.
 * @return {Object}
 */
const Hello = () => (
  <div className="hello">
    <div className="hello_image">
      <img src={logo} alt="Rollup" />
    </div>
    <div className="hello_texts">
      <h1>Hello projext!</h1>
      <h2>Sample app using Rollup and React</h2>
    </div>
  </div>
);

export default Hello;
