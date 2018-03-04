const express = require('express');
const useExpress = require('projext-plugin-webpack/express');
const { Logger } = require('wootils/node/logger');

const app = express();
const logger = new Logger();
const port = 2509;
useExpress(app, 'webapp', 'expresswebapp');

app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
  logger.warning('waiting for webpack...');
});
