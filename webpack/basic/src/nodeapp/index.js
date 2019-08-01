const { Logger } = require('wootils/node/logger');

const logger = new Logger();
logger.success(process.env.HELLO_MESSAGE);
logger.info('Sample app using webpack');
