/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// const compression = require('compression');
const App = require('./src/js/App').default;
const webpackConfig = require('./webpack.config')({ prod: true });

const { StaticRouter } = ReactRouter;
const port = 9000;
const baseTemplate = fs.readFileSync('./dist/index.html');
const template = _.template(baseTemplate);

const server = express();

const compiler = webpack(webpackConfig); // eslint-disable-line

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.path,
  }),
);

server.use(webpackHotMiddleware(compiler));

// server.use(compression());
server.use('/dist', express.static('./dist'));

server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App),
    ),
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

console.log(`listening on ${port}`);
server.listen(port);
