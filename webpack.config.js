const { resolve } = require("path");
const webpack = require("webpack");

module.exports = env => {
  const regStyle = /\.(css|less|styl|scss|sass|sss)$/;
  if (env) {
    console.log(env);
  }

  return {
    context: resolve("src"),
    entry: {
      app: "./js/bootstrap.js"
    },
    devtool: "cheap-eval-source-map",
    output: {
      filename: "bundle.js",
      path: resolve("public"),
      publicPath: "/public/"
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
      errors: true
    },
    module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.jsx?$/,
        //   loader: 'eslint-loader',
        //   exclude: /node_modules/
        // },
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          include: resolve("js")
        },
        {
          test: regStyle,
          rules: [
            {
              // Apply PostCSS plugins including autoprefixer
              loader: "postcss-loader",
              options: { config: { path: "./build-scripts/postcss.config.js" } }
            }
          ]
        }
      ]
    }
  };
};
