import * as React from 'react';
import { hot } from 'react-hot-loader';
import Hello from '../hello/hello.component';
import './main.scss';

const Main = () => (
  <div className="main">
    <Hello />
  </div>
);

export default hot(module)(Main);
