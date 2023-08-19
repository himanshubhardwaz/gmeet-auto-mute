// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/content.ts",
  output: {
    filename: "content.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
