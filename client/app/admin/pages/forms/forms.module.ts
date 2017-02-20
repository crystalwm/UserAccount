import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { routing }       from './forms.routing';



@NgModule({
    imports:[
        routing
    ],
    declarations:[FormsComponent]
})
export class FormsModule{ }