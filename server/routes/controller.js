/**
 * Created by liulei_dev on 2016/1/25.
 */
var User = require('../models/user');
var router = require('koa-router')();
var koaBody = require('koa-body')();

var list = {
    login: function*(next) {
        var params = this.request.body;
        var username = params.name;
        if (yield User.pwRight(username, params.password)) {
            this.session.name = username;
            this.redirect('/main');
        } else {
            this.redirect('/');
        }
    },
    isUserReg: function*(next) {
        var params = JSON.parse(this.request.body);
        var username = params.name;
        console.log('isUserReg params:' + params + '\n');
        if (yield User.pwRight(username, params.password)) {
            console.log('isUserReg return:true \n');
            this.body = { data: true };
        } else {
            console.log('isUserReg return:false \n');
            this.body = { data: false };
        }

    },
    logout: function*(next) {
        this.session = null;
        this.redirect('/login');
    },
    loginRender: function*(next) {


        console.log('enter login');
        yield this.render("./public/index");
    },
    mainRender: function*(next) {
        if (yield User.thereIs(this.session.name)) {
            yield this.render("/main");
        } else {
            this.redirect("/");
        }
    }
};

router
    .get('/', koaBody, list.loginRender)
    .post('/', koaBody, list.login)
    .post('/isUserReg', koaBody, list.isUserReg)
    .get('/main', koaBody, list.mainRender);
module.exports = router;