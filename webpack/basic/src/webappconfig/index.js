const hello = require('./hello.html');
const webpackLogo = require('./assets/webpack-logo.png');
require('./assets/styles.scss');
require('./assets/favicon.ico');

// eslint-disable-next-line no-process-env
const config = process.env.CONFIG;
const app = document.querySelector('#app');
app.innerHTML = hello
.replace('{{title}}', config.title)
.replace('{{subtitle}}', config.subtitle)
.replace('{{imageURL}}', webpackLogo);
