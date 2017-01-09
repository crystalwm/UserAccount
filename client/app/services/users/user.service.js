"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_users_1 = require('./mock-users');
var logger_service_1 = require('../logger/logger.service');
require('rxjs/add/observable/of');
require('rxjs/add/operator/add');
require('rxjs/add/operator/delay');
var UserService = (function () {
    function UserService(logger) {
        this.logger = logger;
        this.isLoggedIn = false;
    }
    UserService.prototype.isUserReg = function (name, password) {
        this.logger.log("checking weather the user has registered:" + name);
        return mock_users_1.USERS.some(function (user) { return user.name == name && user.password == password; });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map