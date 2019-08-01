import hello from './hello.html';
import loader from './loader.html';
import webpackLogo from './assets/webpack-logo.png';
import './assets/styles.scss';
import './assets/favicon.ico';

// Get the DOM element where the app will be rendered.
const app = document.querySelector('#app');
// Set a modified version of the _"hello component"_ as the element contents.
app.innerHTML = `${hello}${loader}`
// - Replace the placeholder with the path to the webpack logo.
.replace('{{imageURL}}', webpackLogo);


const loadButton = document.querySelector('#loadButton');
const loadResults = document.querySelector('#loadResults');

loadButton.addEventListener('click', () => {
  loadResults.innerHTML = 'Loading...';
  loadResults.style.display = 'block';
  loadButton.remove();
  import(/* webpackChunkName: "timeChunk" */'./time')
  .then(({ default: getTime }) => {
    loadResults.innerHTML = getTime();
  })
  .catch((error) => {
    loadResults.innerHTML = `ERROR: ${error.message}`;
  });
});
