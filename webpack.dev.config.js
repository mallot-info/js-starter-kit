const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Javascript starter kit"
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
     optimization: {
     splitChunks: {
       chunks: 'all'
     }
   },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react',  {
                "pragma": "h", // default pragma is React.createElement
                "pragmaFrag": "DocumentFragment", // default is React.Fragment
                "throwIfNamespace": false // defaults to true
              }]]
          },
        }
      }
    ]
  }
};
