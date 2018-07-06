import hello from './hello.html';
import list from './list.html';
import webpackLogo from './assets/webpack-logo.png';

import './assets/styles.scss';
import './assets/favicon.ico';

// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set a modified version of the _"hello component"_ as the element contents.
app.innerHTML = `${hello}${list}`
// - Replace the placeholder with the path to the webpack logo.
.replace('{{imageURL}}', webpackLogo);
