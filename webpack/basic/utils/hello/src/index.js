import hello from './hello.html';
import webpackLogo from './assets/webpack-logo.png';
import './hello.scss';

// Export a modified version of the _"hello component"_ so the `webappmodules` can implement it.
export default hello
// - Replace the placeholder with the path to the webpack logo.
.replace('{{logoURL}}', webpackLogo);
