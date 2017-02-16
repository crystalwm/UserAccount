import { Routes, RouterModule }  from '@angular/router';

import { FormsComponent } from './forms.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  }
];

export const routing = RouterModule.forChild(routes);