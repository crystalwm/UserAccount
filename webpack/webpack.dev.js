'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = function(options) {
    return {
        debug: true,
        devtool: 'source-map',
        entry: {
            app: [path.resolve(rootDir, 'client', 'bootstrap.jit')],
            vendor: [path.resolve(rootDir, 'client', 'vendor')]
        },
        module: {
            loaders: [
                { loader: 'raw', test: /\.(css|html)$/ },
                // { loader: 'ts', test: /\.ts$/ }
                { loaders: ["awesome-typescript", "angular2-template"], test: /\.ts$/ }
            ]
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(rootDir, 'dist')
        },
        plugins: [
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
            extensions: ['', '.ts', '.js']
        }
    };
}