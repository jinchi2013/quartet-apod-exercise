var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  // this the loader config to load js files
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ],
      "plugins": []
    }
  }
];

module.exports = {
  devtool: 'eval-source-map', // source map for debug
  entry: path.resolve('src', 'main.js'), // entry point of the app
  output: {
    path: path.resolve('build'), // output file folder
    filename: '[name].js', // output filename
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html' // The file to write the HTML to. Defaults to index.html.
    })
  ],
  module: {
    loaders: loaders
  }
};

/*
HtmlWebpackPlugin({
  template: // the template used for html,
  inject: //true | 'head' | 'body' | false Inject all assets into the given template or templateContent -
          When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
          'head' will place the scripts in the head element.
  filename: // The file to write the HTML to. Defaults to index.html.
})

*/
