import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

const routeConfig:Routes=[{
    path:'',
    component:DashboardComponent
}];

@NgModule({
    imports:[
        RouterModule.forChild(routeConfig)
    ],
    exports:[RouterModule]
})
export class DashboardRoutingModule{}