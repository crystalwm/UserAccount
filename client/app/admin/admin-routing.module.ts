import {
    RouterModule,
    Routes
} from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { PagesComponent } from './pages/pages.component';



const routes: Routes = [
    //  { path: '', redirectTo: 'pages', pathMatch: 'full' }
    {
        path: '',
        component: AdminComponent,
        children: [
            {
               path: 'pages',
               loadChildren:'client/app/admin/pages/pages.module#PagesModule'
            },
            {
                path: '',
                redirectTo: 'pages',
                pathMatch: 'full'
            }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }