var koa = require('koa');
var app = koa();
var router = require('koa-router');
var api = router();
require('./webpack/webpackdev.server')(api);
var render = require('koa-swig');
var path = require('path');
serve = require('koa-static');

app.context.render = render({
    root: path.join(__dirname, './dist'),
    ext: 'html'
});

// api.get('/', function() {
//     this.render("./dist/index");
// })



app
    .use(serve(path.join(__dirname, './dist')))
    .use(api.routes());

app.listen(8080);