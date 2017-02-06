var koa = require('koa');
var app = koa();
var router = require('koa-router');
var api = router();
require('./webpack/webpackdev.server')(api);
var render = require('koa-swig');
var path = require('path');
var https = require('https');
serve = require('koa-static');
var rootCas = require('ssl-root-cas/latest').create();
require('ssl-root-cas/latest')
    .inject()
    .addFile('./RootCA/' + 'my-root-ca.crt.pem');

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
    checkServerIdentity: function(host, cert) {
        if (host != cert.subject.CN)
            return 'Incorrect server identity'; // Return error in case of failed checking.
        // Return undefined value in case of successful checking.
        // I.e. you could use empty function body to accept all CN's.
    }
};
options.agent = new https.Agent(options);
https
    .createServer(options, app.callback()).listen(8080, function() {
        console.log("app listening on port 8080");
    });