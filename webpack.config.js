const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",

  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: resolve(__dirname,
      "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
      favicon: "./public/1860-64.png"
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/images", to: "assets/images" },
      ],
    }),
    new SourceMapDevToolPlugin({})

  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()
    ],
  };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  };
}

module.exports = config;