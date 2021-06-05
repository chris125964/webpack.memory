const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/images", to: "assets/images" },
      ],
    }),

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