const hello = require('./hello.html');
const webpackLogo = require('./assets/webpack-logo.png');
require('./assets/styles.scss');
require('./assets/favicon.ico');

// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set a modified version of the _"hello component"_ as the element contents.
app.innerHTML = hello
// - Replace the placeholder with the path to the webpack logo.
.replace('{{imageURL}}', webpackLogo);
