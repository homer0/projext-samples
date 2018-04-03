import fs from 'fs';
import express from 'express';
import { Logger } from 'wootils/node/logger';
import ReactDOM from 'react-dom/server';
import React from 'react';
import Main from '../webapp/components/main/main.component';

const port = 2509;
const app = express();
const logger = new Logger();
const getHTML = () => new Promise((resolve, reject) => {
  const htmlPath = '../webapp/index.html';
  fs.readFile(htmlPath, 'utf-8', (error, data) => {
    if (error) {
      reject(error);
    } else {
      const component = ReactDOM.renderToString(<Main />);
      const html = data.replace(/(<div id="app">)(<\/div>)/i, `$1${component}$2`);
      resolve(html);
    }
  });
});

const ssrMiddleware = (req, res, next) => {
  if (req.originalUrl === '/') {
    getHTML()
    .then((html) => {
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    })
    .catch((error) => {
      logger.warning('Something went wrong with the SSR');
      logger.error(error);
      next();
    });
  } else {
    next();
  }
};

app.use(ssrMiddleware);
app.use('/', express.static('../webapp'));
app.use('/', express.static('./'));

app.listen(port, () => {
  logger.success(`Starting on port ${port}`);
});
