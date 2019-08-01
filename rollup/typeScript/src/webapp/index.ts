import hello from './hello.html';
import rollupLogo from './assets/rollup-logo.png';
import './assets/styles.scss';
import './assets/favicon.ico';

/**
 * Replaces a placeholder on a template with the URL for a logo image.
 *
 * This function exists with the sole purpose of testing TypeScript syntax.
 * @param {string} template                   The HTML template where the placeholder will be
 *                                            replaced.
 * @param {string} url                        The URL of the logo image to add on the HTML.
 * @param {string} [placeholder='{{imageURL'] The placeholder the function will replace with the
 *                                            logo.
 * @return {string}
 */
const addLogo = (
  template:string,
  url:string,
  placeholder:string = '{{imageURL}}'
) => template.replace(placeholder, url);

// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set a modified version of the _"hello component"_ as the element contents.
app.innerHTML = addLogo(hello, rollupLogo);
