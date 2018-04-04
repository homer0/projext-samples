const hello = require('hello');
require('./assets/styles.scss');
require('./assets/favicon.ico');

const app = document.querySelector('#app');
app.innerHTML = hello;
