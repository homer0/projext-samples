const hello = require('./hello.html');
const rollupLogo = require('./assets/rollup-logo.png');
require('./hello.scss');

// Export a modified version of the _"hello component"_ so the `webappmodules` can implement it.
module.exports = hello
// - Replace the placeholder with the path to the Rollup logo.
.replace('{{logoURL}}', rollupLogo);
