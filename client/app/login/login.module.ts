import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { LoggerService } from '../services/logger/logger.service';


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[LoginComponent],
    providers:[LoggerService],
    bootstrap:[LoginComponent]
})
export class LoginModule{ }