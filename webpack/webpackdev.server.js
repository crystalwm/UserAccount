var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.js')();
var pixie = require('koa-pixie-proxy');
var url = require('url');
var path = require('path');
const rootDir = path.resolve(__dirname, '..');
var _ = require('underscore-contrib');


module.exports = function(api) {
    var proxy = pixie({ host: 'https://localhost:8081/' });

    api.get('/dist', proxy('/'));
    _.map(config.entry, function(value, key) {

        config.entry[key].unshift('webpack/hot/dev-server');
        config.entry[key].unshift('webpack-dev-server/client?https://127.0.0.1:8081/');

    });
    config.output.publicPath = "https://localhost:8081/";


    config.plugins = (config.plugins || []).concat([
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
    ]);

    var compiler = webpack(config);
    var fs = require('fs');
    var pathCert = './server/ssl/';

    var server = new WebpackDevServer(compiler, {
        hot: true,
        https: true,
        key: fs.readFileSync(path.resolve(rootDir, pathCert + 'my-server.key.pem')),
        cert: fs.readFileSync(path.resolve(rootDir, pathCert + 'my-server.crt.pem')),
        // // webpack-dev-middleware options
        // quiet: true,
        noInfo: false,
        contentBase: path.resolve(rootDir, 'dist'),
        // watchOptions: {
        //     aggregateTimeout: 300,
        //     poll: 1000
        // },
        stats: { colors: true },
    });
    server.listen(8081, "127.0.0.1", function() {
        console.log('Listening at https://127.0.0.1:8081')
    });

}