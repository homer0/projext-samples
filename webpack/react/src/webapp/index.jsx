import * as React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main/main.component';

const app = document.getElementById('app');
if (app.innerHTML === '') {
  ReactDOM.render(<Main />, app);
} else {
  ReactDOM.hydrate(<Main />, app);
}
