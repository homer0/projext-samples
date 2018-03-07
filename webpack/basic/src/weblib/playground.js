const { webLib } = require('.');
require('./playground/styles.scss');

const app = document.querySelector('#app');
app.innerHTML = webLib.getMessage();
