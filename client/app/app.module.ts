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




@NgModule({
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
export class AppModule { }