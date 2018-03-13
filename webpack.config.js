const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line

module.exports = env => {
  // const regStyle = /\.(css|less|styl|scss|sass|sss)$/;
  if (env) {
    console.log(env); // eslint-disable-line
  }

  return {
    context: resolve('src'),
    entry: {
      app: './js/clientApp.jsx',
    },
    output: {
      filename: 'bundle.js',
      path: resolve('public'),
    },
    devServer: {
      contentBase: resolve('public'),
      compress: true,
      port: 9000,
      historyApiFallback: true,
      // TODO https://www.akadia.com/services/ssh_test_certificate.html
      // generate selfsign certificate to use https and http2
    },
    devtool: 'cheap-eval-source-map',

    stats: {
      colors: true,
      reasons: true,
      chunks: true,
      errors: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: resolve('src/js'),
        },
        // {
        //   test: regStyle,
        //   rules: [
        //     {
        //       // Apply PostCSS plugins including autoprefixer
        //       loader: 'postcss-loader',
        //       options: { config: { path: './build-scripts/postcss.config.js' } }
        //     }
        //   ]
        // }
      ],
    },
  };
};
