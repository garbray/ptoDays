const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = env => {
  // const regStyle = /\.(css|less|styl|scss|sass|sss)$/;
  if (env) {
    console.log(env); // eslint-disable-line
  }

  return {
    context: resolve('src'),
    entry: ['babel-polyfill', './js/clientApp.jsx'],
    output: {
      path: resolve('dist'),
      filename: '[name].bundle.js',
    },
    devServer: {
      hot: true,
      port: 9000,
      historyApiFallback: true,
      contentBase: resolve('public'),
      // TODO https://www.akadia.com/services/ssh_test_certificate.html
      // generate selfsign certificate to use https and http2
      // compress: true,
      // https: true,
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
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin(),
      // TODO looks like the common chunks plugin was deprecated in webpack 4
      // review how to replace it
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'commons',
      //   filename: 'commons.js',
      // }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            // test: /[\\/]node_modules[\\/]/,
            test: /[\\/]react[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
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
