import express from 'express';
import { Logger } from 'wootils/node/logger';
import template from './template.html';
import styles from './assets/styles.scss';
import webpackLogo from './assets/webpack-logo.png';
import hello from './hello.html';
import './assets/favicon.ico';

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
