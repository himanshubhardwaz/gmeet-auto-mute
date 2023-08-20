const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: "./src/content.ts",
    popup: "./src/popup.ts",
    background: "./src/background.ts",
  },
  output: {
    filename: "[name].js",
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/popup.html",
          to: "popup.html",
        },
        {
          from: "./src/popup.css",
          to: "popup.css",
        },
        {
          from: "./src/manifest.json",
          to: "manifest.json",
        },
      ],
    }),
  ],
  devServer: {
    hot: true,
  },
};
