import { Routes, RouterModule }  from '@angular/router';

import { FormsComponent } from './forms.component';
import { AngularMaterialComponent } from './angularMaterial/angularMaterial.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children:[
      {path:'angular-material',component:AngularMaterialComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);