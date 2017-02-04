var koa = require('koa');
var app = koa();
var router = require('koa-router');
var api = router();
require('./webpack/webpackdev.server')(api);
var render = require('koa-swig');
var path = require('path');
serve = require('koa-static');

// app.context.render = render({
//     root: path.join(__dirname, './dist'),
//     ext: 'html'
// });

// api.get('/', function() {
//     this.render("./dist/index");
// })



app
// .use(serve(path.join(__dirname, './dist')))
    .use(api.routes());


var fs = require('fs');
var pathCert = './server/CA/';
var options = {
    key: fs.readFileSync(pathCert + 'my-server-ca.key.pem'),
    cert: fs.readFileSync(pathCert + 'my-server-ca.crt'),
    ca: fs.readFileSync('./RootCA/' + 'my-root-ca.crt.pem'),
    rejectUnauthorized: false
};
require('https')
    .createServer(options, app.callback()).listen(8080, function() {
        console.log("app listening on port 8080");
    });