import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { AngularMaterialComponent } from './angularMaterial/angularMaterial.component';
import { FormsRoutingModule } from './forms-routing.module';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';



@NgModule({
    imports: [
        FormsRoutingModule,
        AlertModule
    ],
    declarations: [FormsComponent,AngularMaterialComponent]

})
export class FormsModule { }