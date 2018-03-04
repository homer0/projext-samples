const hello = require('./hello.html');
const webpackLogo = require('./assets/webpack-logo.png');
require('./assets/styles.scss');
require('./assets/favicon.ico');

const app = document.querySelector('#app');
app.innerHTML = hello.replace('{{imageURL}}', webpackLogo);
