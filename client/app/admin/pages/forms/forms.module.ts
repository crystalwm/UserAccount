import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsComponent } from './forms.component';
import { routing }       from './forms.routing';



@NgModule({
    imports:[
        BrowserModule,
        routing
    ],
    declarations:[FormsComponent]
})
export class FormsModule{ }