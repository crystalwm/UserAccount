var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.onSubmit = function ($event, username, password) {
            var that = this;
            this.userService.isUserReg(username, password)
                .then(function (isReg) {
                if (isReg) {
                    that.router.navigate(['/admin']);
                }
                else {
                    window.location.reload();
                    //  console.log('login.component:'+isReg);
                }
            }, function (err) {
                console.log('Error: %s', err);
            });
        };
        this.userService = userService;
        this.router = router;
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.html',
        styleUrls: ['./login.css'],
        providers: [UserService]
    }),
    __metadata("design:paramtypes", [UserService,
        Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/login/login.component.js.map