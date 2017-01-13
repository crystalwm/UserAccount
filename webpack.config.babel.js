//import path from 'path';
//var path = require('path');
var helpers = require('./helpers');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'polyfills': './client/app/polyfills.ts',
        'vendor': './client/app/vendor.ts',
        'app': './client/app/main.ts'
    },

    output: {
        path: helpers.root('typescript-angular2-client', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        //   modules: [path.resolve(__dirname, "client"), "node_modules"],
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            /*
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: [
                        ['es2015', { modules: false }],
                    ],
                },
            },
            */
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                include: helpers.root('client', 'app'),
                loader: 'raw'
            }

        ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}