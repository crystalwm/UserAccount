import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';




import { LoginModule } from './login/login.module';
//for test,so import it
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/users/user.service';
import { LoggerService } from './services/logger/logger.service';
import { AuthGuardService } from './services/guard/auth-guard.service';






@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        LoginModule,
        AppRoutingModule,
        HttpModule
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