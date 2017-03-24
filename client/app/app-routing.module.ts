import{NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{AuthGuardService} from './services/guard/auth-guard.service';

import {LoginComponent} from './login/login.component';



const routeConfig:Routes=[
    {
        path:'login',
        component:LoginComponent
    }
    ,{
        path:'admin',
        loadChildren:'client/app/admin/admin.module#AdminModule'

    }
    ,{
        path:'',
        redirectTo:'admin',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routeConfig)
        ],
    exports:[RouterModule]
})
export class AppRoutingModule{}