import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

import { FormsComponent } from './forms.component';
import { AngularMaterialComponent } from './angularMaterial/angularMaterial.component';


// noinspection TypeScriptValidateTypes
const routeConfig: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: '', redirectTo: 'material', pathMatch: 'full' },
      { path: 'material', component: AngularMaterialComponent }
    ]
  }
];




@NgModule({
    imports: [
        RouterModule.forChild(routeConfig)
    ],
    exports: [RouterModule]
})
export class FormsRoutingModule { }



