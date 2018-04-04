import * as React from 'react';
import Hello from '../hello/hello.component';
import './main.scss';
/**
 * Define the main layout of the app, set the styles for it and show the component with the
 * _"Hello message"_.
 * @return {Object}
 */
const main = () => (
  <div className="main">
    <Hello />
  </div>
);

export default main;
