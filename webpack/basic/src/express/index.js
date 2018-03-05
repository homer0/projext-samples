const express = require('express');
const { Logger } = require('wootils/node/logger');
const template = require('./template.html');
const styles = require('./assets/styles.scss');
const webpackLogo = require('./assets/webpack-logo.png');
const hello = require('./hello.html');
require('./assets/favicon.ico');

const port = 2509;
const app = express();
const logger = new Logger();

const html = hello.replace('{{imageURL}}', webpackLogo);

app.use('/statics', express.static(`${__dirname}/statics`));

app.use('/favicon.ico', (req, res, next) => {
  res.sendFile(`${__dirname}/favicon.ico`, (error) => {
    if (error) {
      next(error);
    } else {
      res.end();
    }
  });
});

app.use((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(
    template
    .replace('{{styles}}', styles)
    .replace('{{html}}', html)
  );
  res.end();
});

app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
});
