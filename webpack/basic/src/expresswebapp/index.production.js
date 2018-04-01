const express = require('express');
const { Logger } = require('wootils/node/logger');

const port = 2509;
const app = express();
const logger = new Logger();

app.use('/', express.static('../webapp'));

app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
});
