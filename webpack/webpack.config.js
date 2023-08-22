const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"), //entry point which points to the index.tsx file in the src folder
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // this config allow us to leave off the file extension when importing
  },
  //webpack should use the babel loadernfor all .js .ts .jsx .tsx files excluding the modules folder
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  //output property we instructing webpack that the bundled code should be palced inside the file called bundle.js and bundle.js placed inside the build folder
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    //this plugin inject the bundle.js into index.html file and place that html file in the build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
  stats: "errors-only",
};
