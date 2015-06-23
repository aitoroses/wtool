var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {

  output: {
    library: 'Selectize',
    libraryTarget: 'umd'
  },

  externals: [
     {
       "react": {
         root: "React",
         commonjs2: "react",
         commonjs: "react",
         amd: "react"
       },
     },
     {
       "jquery": {
         root: "jQuery",
         commonjs2: "jquery",
         commonjs: "jquery",
         amd: "jquery"
       },
     }
  ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ["style", "css"], exclude: /node_modules/ },
    ],
    noParse: [/* Regex */]
  },

  resolve: {
    root: [path.resolve("node_modules")],
    extensions: ['', '.js', '.jsx',],
    alias: {}
  },

  node: {
    Buffer: false
  },

  plugins: plugins,

  devtool: process.env.COMPRESS ? null : 'inline-source-map'

};
