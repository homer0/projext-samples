const hello = require('hello');
require('./assets/styles.scss');
require('./assets/favicon.ico');

// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set the _"hello component"_ as the element contents.
app.innerHTML = hello;
