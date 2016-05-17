var webpack = require('webpack');

var DEB = JSON.parse(process.env.DEB_ENV || true);

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    // externals: {
    //     // require("jquery") is external and available
    //     //  on the global var jQuery
    //     "jquery": "jQuery"
    // },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new webpack.ProvidePlugin({
            "_": "underscore"
          })
    ],
    plugins: DEB?[
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
      ]:[]
};