const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        loader: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    publicPath: "http://localhost:3000/dist",
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  mode: "development",
  performance: {
    hints: false,
  },
};
