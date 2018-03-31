const hello = require('./hello.html');
const styles = require('./assets/styles.scss');

require('./assets/favicon.ico');

const app = document.querySelector('#app');
app.className = styles.app;
app.innerHTML = hello.replace(/\{\{styles:([\w-_0-9]+)\}\}/ig, (match, name) => styles[name]);
