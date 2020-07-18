const path = require("path");

module.exports = (env) => ({
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9000,
    open: true,
  },
});
