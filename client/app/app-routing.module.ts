import{NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{AuthGuardService} from './services/guard/auth-guard.service';

import {LoginComponent} from './login/login.component';


const routeConfig:Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'admin',
        loadChildren:'app/admin/admin.module#AdminModule',
        canLoad:[AuthGuardService]
    },   
    {
        path:'',
        component:LoginComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routeConfig)
        ],
    exports:[RouterModule]
})
export class AppRoutingModule{}