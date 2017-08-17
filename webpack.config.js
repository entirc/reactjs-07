const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { 
            loader: "babel-loader",
            query: {
              presets: [
                "react",
                "es2015"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
}
