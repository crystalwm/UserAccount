'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const rootDir = path.resolve(__dirname, '..');

module.exports = function(options) {
    return {
        devtool: 'source-map',
        entry: {
            app: [path.resolve(rootDir, 'client', 'bootstrap.jit')],
            vendor: [path.resolve(rootDir, 'client', 'vendor')],
            material: [path.resolve(rootDir, "./node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.css")],
            styles: [path.resolve(rootDir, 'client', 'app/styles')]
        },
        module: {
            rules: [
                { use: 'raw-loader', test: /\.(css|html)$/ }, {
                    use: "file-loader?name=assets/[name].[ext]",
                    test: /\.(png|jpe?g|gif|ico)$/,
                },
                {
                    test: /\.ts$/,
                    use: [{ // MAKE SURE TO CHAIN VANILLA JS CODE, I.E. TS COMPILATION OUTPUT.
                            loader: 'ng-router-loader',
                            options: {
                                loader: 'async-import',
                                genDir: 'compiled'
                            }
                        },
                        {
                            loader: 'awesome-typescript-loader'
                        },
                        {
                            loader: 'angular2-template-loader'
                        }
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                // {
                //     test: /\.css$/,
                //     loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                //     include: path.resolve(rootDir, 'client', 'app/styles')
                // },
                {
                    include: path.resolve(rootDir, "./node_modules/@angular/material/core/theming/prebuilt"),
                    use: ["style-loader", "css-loader", "resolve-url-loader"],
                    test: /\.css$/,
                },

                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    }),
                    include: path.resolve(rootDir, 'client', 'app/styles')
                }, {
                    use: ["exports-loader?module.exports.toString()", "css-loader?sourceMap", "sass-loader?sourceMap"],
                    test: /\.scss$/,
                }, {
                    use: "url-loader?name=assets/[name].[ext]&limit=10000&mimetype=application/font-woff",
                    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                }, {
                    use: "url-loader?name=assets/[name].[ext]&limit=10000&mimetype=application/font-woff",
                    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                }, {
                    use: "url-loader?name=assets/[name].[ext]&limit=10000&mimetype=application/octet-stream",
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                }, {
                    use: "file-loader?name=assets/[name].[ext]",
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                }, {
                    use: "url-loader?name=assets/[name].[ext]&limit=10000&mimetype=image/svg+xml",
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                },
                {
                    test: /bootstrap\/dist\/js\/umd\//,
                    use: 'imports-loader?jQuery=jquery'
                },
                /* File loader for supporting images, for example, in CSS files.
                 */
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                }
            ]
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(rootDir, 'dist')
        },
        plugins: [
            new AssetsPlugin({
                path: path.resolve(rootDir, 'dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                path.resolve(rootDir, 'client'), // location of your src
                {} // a map of your routes
            ),
            new ChunkWebpack({
                filename: 'vendor.js',
                minChunks: Infinity,
                name: 'vendor'
            }),
            new ExtractTextPlugin("styles.css"),
            new HtmlWebpack({
                filename: 'index.html',
                inject: 'body',
                template: path.resolve(rootDir, 'client', 'index.html')
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Tether: "tether",
                "window.Tether": "tether",
                Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
                Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
                Button: "exports-loader?Button!bootstrap/js/dist/button",
                Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
                Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
                Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
                Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
                Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
                Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
                Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
                Util: "exports-loader?Util!bootstrap/js/dist/util"
            })
        ],
        resolve: {
            extensions: ['.ts', '.js', '.css', '.scss']
        }
    };
}