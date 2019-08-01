import hello from './hello.html';
import styles from './assets/styles.scss';
import './assets/favicon.ico';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set the CSS Module identifier for `app` as the element class.
app.className = styles.app;
// Set a modified version of the _"hello component"_ as the element contents.
app.innerHTML = hello
// - Replace the placeholders with the CSS Module identifiers.
.replace(/\{\{styles:([\w-_0-9]+)\}\}/ig, (match, name) => styles[name]);
