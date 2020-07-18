const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode,
    context: path.resolve(__dirname, "../"),
    entry: "./src/index.js",
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "../dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
  };
};
