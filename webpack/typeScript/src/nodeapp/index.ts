import { Logger } from 'wootils/node/logger';

const logger = new Logger();

const logMessage = (message:string, type:string = 'success') => {
  const fn:Function = logger[type].bind(logger);
  fn(message);
};


logMessage('Hello projext!');
logMessage('Sample app using webpack', 'info');
