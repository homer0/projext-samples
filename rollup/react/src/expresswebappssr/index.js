import express from 'express';
import useExpress from 'projext-plugin-rollup/express';
import { Logger } from 'wootils/node/logger';
import ReactDOM from 'react-dom/server';
import React from 'react';
import Main from '../webapp/components/main/main.component';

// Define the port for the express app.
const port = 2509;
// Create the instance of the app.
const app = express();
// Create a logger to show a message when the app starts.
const logger = new Logger();
// Define the variable that will later have the reference to the dev middleware utils.
let middleware = null;
/**
 * Uses the dev middleware file system to access the `webapp` index.html, and inject the rendered
 * version of the `Main` component.
 * @return {Promise<string,Error>} If everything goes well, it will return the HTML ready to serve.
 */
const getHTML = () => middleware.getFileSystem()
.then((fs) => new Promise((resolve, reject) => {
  // Set the path to the HTML file.
  const htmlPath = `${middleware.getDirectory()}/../webapp/index.html`;
  // Read the HTML file.
  fs.readFile(htmlPath, 'utf-8', (error, data) => {
    // Reject if something went wrong.
    if (error) {
      reject(error);
    } else {
      // Render the `Main` component into a string.
      const component = ReactDOM.renderToString(<Main />);
      // Replace it, using a very awful `RegExp`, on the HTML contents.
      const html = data.replace(/(<div id="app">)(<\/div>)/i, `$1${component}$2`);
      // Resolve with the updated HTML.
      resolve(html);
    }
  });
}));
/**
 * This is an express middleware that checks if the request is for the server root in order to
 * serve the pre rendered frontend. If the request is not for the server root or something went
 * wrong while rendering the frontend, it will just fallback to render the HTML when the frontend
 * gets loaded and executed on the browser (aka, it will fail silently).
 * @param {Request}  req  The express Request object.
 * @param {Response} res  The express Response object.
 * @param {Function} next The function you use to indicate that express should move to the next
 *                        middleware on the chain.
 */
const ssrMiddleware = (req, res, next) => {
  // If the request is for the server root...
  if (req.originalUrl === '/') {
    // ...then try to get the pre rendered HTML.
    getHTML()
    .then((html) => {
      // Serve the HTML.
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    })
    .catch((error) => {
      // If something went wrong, log it on the console, but continue as if nothing happened.
      logger.warning('Something went wrong with the SSR');
      logger.error(error);
      next();
    });
  } else {
    // ...otherwise, move to the next middleware.
    next();
  }
};

// Tell express to use the server side rendering middleware.
app.use(ssrMiddleware);
/**
 * Implement the dev middleware by telling projext that the target `webapp` will be served by the
 * `expresswebappssr` target.
 */
middleware = useExpress(app, 'webapp', 'expresswebappssr');

// Start the app.
app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
  // Add a "nice" message while the user waits for the `webapp` bundling process.
  logger.warning('waiting for Rollup...');
});
