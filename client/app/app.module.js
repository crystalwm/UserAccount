"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var login_module_1 = require("./login/login.module");
//for test,so import it
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var user_service_1 = require("./services/users/user.service");
var logger_service_1 = require("./services/logger/logger.service");
var auth_guard_service_1 = require("./services/guard/auth-guard.service");
//ng2-bootstrap
// import { AlertModule, RatingModule,TabsModule  } from 'ng2-bootstrap/ng2-bootstrap';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            login_module_1.LoginModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
            // TabsModule.forRoot(),
            // AlertModule.forRoot(),
            // RatingModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [
            user_service_1.UserService,
            logger_service_1.LoggerService,
            auth_guard_service_1.AuthGuardService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/app.module.js.map