var koa = require('koa'),
    render=require('koa-swig'),
    path=require('path'),
    serve = require('koa-static'),
    router = require('koa-router')(),
    controller = require('./routes/controller.js'),
    session = require('koa-session');


var app = koa();




app.context.render = render({
    root: path.join(__dirname, '../build'),
    ext: 'html'
});



    app
        .use(session(app))
        .use(serve(path.join(__dirname, '../build/public')))
        .use(serve(path.join(__dirname, '../build'))) //public files
        .use(router.routes())
        .use(controller.routes())
        .use(controller.allowedMethods());


var fs = require('fs');
var path = './ssl/';
var options = {
    key: fs.readFileSync(path + 'my-server.key.pem'),
    cert: fs.readFileSync(path + 'my-server.crt.pem')
};
require('https')
    .createServer(options,app.callback()).listen(3002, function () {
    console.log("app listening on port 3002");
});
