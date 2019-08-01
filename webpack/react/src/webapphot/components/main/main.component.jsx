import * as React from 'react';
import { hot } from 'react-hot-loader';
import Hello from '../hello/hello.component';
import './main.scss';
/**
 * Define the main layout of the app, set the styles for it and show the component with the
 * _"Hello message"_.
 * @return {Object}
 */
const Main = ({ title }) => (
  <div className="main">
    <Hello title={title} />
  </div>
);
// Export it while enabling HMR.
export default hot(module)(Main);
