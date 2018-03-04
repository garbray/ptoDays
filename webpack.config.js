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
      app: './js/bootstrap.jsx'
    },
    devtool: 'cheap-eval-source-map',
    output: {
      filename: 'bundle.js',
      path: resolve('public'),
      publicPath: '/public/'
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
      errors: true
    },
    devServer: {
      contentBase: resolve('public'),
      compress: true,
      port: 3000
      // TODO https://www.akadia.com/services/ssh_test_certificate.html
      // generate selfsign certificate to use https and http2
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: resolve('src/js')
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
      ]
    }
  };
};
