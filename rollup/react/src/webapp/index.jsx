import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main/main.component';

// Get the DOM element where the app will be rendered.
const app = document.getElementById('app');
// If the element doesn't have contents...
if (app.innerHTML === '') {
  // ...render the `Main` component.
  ReactDOM.render(<Main />, app);
} else {
  // ...otherwise, it means that the page was rendered using SSR, so `hydrate` it.
  ReactDOM.hydrate(<Main />, app);
}
