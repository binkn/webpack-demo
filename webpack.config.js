const HtmlWebpackPlugin = require("html-webpack-plugin")

const VENDOR_LIBS = [
  "react",
  "react-dom",
  "react-redux",
  "redux"
]

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: VENDOR_LIBS
  },

  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "[name].js"
  },

  devServer: {
    contentBase: "./build",
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
}
