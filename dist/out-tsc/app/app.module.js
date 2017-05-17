var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
//for test,so import it
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/users/user.service';
import { LoggerService } from './services/logger/logger.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
//ng2-bootstrap
// import { AlertModule, RatingModule,TabsModule  } from 'ng2-bootstrap/ng2-bootstrap';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            CommonModule,
            FormsModule,
            LoginModule,
            AppRoutingModule,
            HttpModule
            // TabsModule.forRoot(),
            // AlertModule.forRoot(),
            // RatingModule.forRoot()
        ],
        declarations: [
            AppComponent
        ],
        providers: [
            UserService,
            LoggerService,
            AuthGuardService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/app.module.js.map