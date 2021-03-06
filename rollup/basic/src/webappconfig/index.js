/* eslint-disable no-process-env */
import hello from './hello.html';
import rollupLogo from './assets/rollup-logo.png';
import './assets/styles.scss';
import './assets/favicon.ico';

/**
 * Get the configuration projext will inject. To be clear, neither `process` or `env` exists,
 * the entire `process.env.CONFIG` variable will be replced when the app is builded.
 */
const config = process.env.CONFIG;
// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set a modified version of the _"hello component"_ as the element contents.
app.innerHTML = hello
// - Replace the placeholder with the title from the configuration.
.replace('{{title}}', config.title)
// - Replace the placeholder with the subtitle from the configuration.
.replace('{{subtitle}}', config.subtitle)
// - Replace the placeholder with the path to the Rollup logo.
.replace('{{imageURL}}', rollupLogo);
