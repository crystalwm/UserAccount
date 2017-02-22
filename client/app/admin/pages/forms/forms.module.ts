import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { AngularMaterialComponent } from './angularMaterial/angularMaterial.component';
import { routing } from './forms.routing';



@NgModule({
    imports: [
        routing
    ],
    declarations: [FormsComponent, AngularMaterialComponent]
})
export class FormsModule { }