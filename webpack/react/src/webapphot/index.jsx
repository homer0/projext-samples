import * as React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main/main.component';
// Render the app on the DOM.
ReactDOM.render(
  <Main title={process.env.HELLO_MESSAGE} />,
  document.getElementById('app')
);
