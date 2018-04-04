const express = require('express');
const useExpress = require('projext-plugin-webpack/express');
const { Logger } = require('wootils/node/logger');

// Define the port for the express app.
const port = 2509;
// Create the instance of the app.
const app = express();
// Create a logger to show a message when the app starts.
const logger = new Logger();
/**
 * Implement the dev middleware by telling projext that the target `webapp` will be served by the
 * `expresswebapp` target.
 */
useExpress(app, 'webapp', 'expresswebapp');

// Start the app.
app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
  // Add a "nice" message while the user waits for the `webapp` bundling process.
  logger.warning('waiting for webpack...');
});
