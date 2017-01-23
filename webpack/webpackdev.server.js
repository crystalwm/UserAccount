var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.js')();
var proxy = require('proxy-middleware');
var url = require('url');
var path = require('path');
const rootDir = path.resolve(__dirname, '..');
var _ = require('underscore-contrib');


// module.exports = function(api) {
//     // 使用8081端口
//     api.get('/dist', proxy(url.parse('http://localhost:8081/dist')));

//     var server = new WebpackDevServer(webpack(config), {
//         contentBase: __dirname,
//         hot: true,
//         quiet: false,
//         noInfo: false,
//         publicPath: '/dist/',
//         headers: { "X-Custom-Header": "yes" },
//         stats: { colors: true }
//     }).listen(8081, 'localhost', function() {
//         console.log('socketio listen 8081')
//     });
// }

_.map(config.entry, function(value, key) {

    config.entry[key].unshift('webpack/hot/dev-server');
    config.entry[key].unshift('webpack-dev-server/client?http://127.0.0.1:8081/');

});
// config.output.publicPath = '/assets/';


config.plugins = (config.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
]);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    hot: true,
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
    console.log('Listening at http://127.0.0.1:8081')
});