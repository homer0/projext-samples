const hello = require('./hello.html');
const webpackLogo = require('./assets/webpack-logo.png');
require('./hello.scss');

module.exports = hello.replace('{{logoURL}}', webpackLogo);
