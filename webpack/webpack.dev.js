'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const rootDir = path.resolve(__dirname, '..');

module.exports = function (options) {
    return {
        debug: true,
        devtool: 'source-map',
        entry: {
            app: [path.resolve(rootDir, 'client', 'bootstrap.jit')],
            vendor: [path.resolve(rootDir, 'client', 'vendor')],
            styles: [path.resolve(rootDir, 'client', 'app/styles')]
        },
        module: {
            loaders: [
                { loader: 'raw', test: /\.(css|html)$/ },
                { loader: 'json', test: /\.json$/ },
                {
                    loaders: ["awesome-typescript", "angular-router", "angular2-template"],
                    test: /\.ts$/
                },
                {
                    test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") ,
                    include: path.resolve(rootDir, 'client', 'app/styles')
                }
            ]
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(rootDir, 'dist')
        },
        plugins: [
            new ExtractTextPlugin('[name].css', { allChunks: true, disable: false }),
            new AssetsPlugin({
                path: path.resolve(rootDir,'dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),
            new ChunkWebpack({
                filename: 'vendor.js',
                minChunks: Infinity,
                name: 'vendor'
            }),
            new HtmlWebpack({
                filename: 'index.html',
                inject: 'body',
                template: path.resolve(rootDir, 'client', 'index.html')
            })
        ],
        resolve: {
            extensions: ['', '.ts', '.js', '.css']
        }
    };
}