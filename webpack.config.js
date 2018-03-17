const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line

module.exports = env => {
  // const regStyle = /\.(css|less|styl|scss|sass|sss)$/;
  if (env) {
    console.log(env); // eslint-disable-line
  }

  return {
    context: resolve('src'),
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './js/clientApp.jsx',
    ],
    output: {
      filename: 'bundle.js',
      path: resolve('public'),
    },
    devServer: {
      hot: true,
      port: 9000,
      historyApiFallback: true,
      contentBase: resolve('public'),
      // compress: true,
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // looks like the common chunks plugin was deprecated in webpack 4
      // review how to replace it
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'commons',
      //   filename: 'commons.js',
      // }),
    ],
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
        // TODO what will be nicer postcss or styledcomponents any preference
        // or anything else cooler to learn???
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
