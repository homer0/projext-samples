const express = require('express');
const { Logger } = require('wootils/node/logger');

// Define the port for the express app.
const port = 2509;
// Create the instance of the app.
const app = express();
// Create a logger to show a message when the app starts.
const logger = new Logger();
/**
 * This file is only used on production builds, so it's assumed that `webapp` is already built and
 * on the parent directory, so any file request should be redirected to its folder.
 */
app.use('/', express.static('../webapp'));

// Start the app.
app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
});
