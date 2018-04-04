import express from 'express';
import { Logger } from 'wootils/node/logger';
import template from './template.html';
import styles from './assets/styles.scss';
import webpackLogo from './assets/webpack-logo.png';
import hello from './hello.html';
import './assets/favicon.ico';

// Define the port for the express app.
const port = 2509;
// Create the instance of the app.
const app = express();
// Create a logger to show a message when the app starts.
const logger = new Logger();

// Replace the URL of the webpack logo on the HTML template.
const html = hello.replace('{{imageURL}}', webpackLogo);

// Define the statics directory to serve the assets.
app.use('/statics', express.static(`${__dirname}/statics`));

// Serve the favicon from the root directory.
app.use('/favicon.ico', (req, res, next) => {
  // Try to send the favicon on the current directory.
  res.sendFile(`${__dirname}/favicon.ico`, (error) => {
    if (error) {
      next(error);
    } else {
      res.end();
    }
  });
});

// For any other request, return the HTML template.
app.use((req, res) => {
  // Set the headers for the template.
  res.setHeader('Content-Type', 'text/html');
  // Write the HTML on the response stream.
  res.write(
    template
    // Replace the template placeholder with the contents of the stylesheet.
    .replace('{{styles}}', styles)
    // Replace the template placeholder with the _"hello component"_.
    .replace('{{html}}', html)
  );
  // Finish the response.
  res.end();
});

// Start the app.
app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
});
