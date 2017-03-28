import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';




const routeConfig: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'forms', loadChildren: 'client/app/admin/pages/forms/forms.module#FormscModule'},
            { path: '', redirectTo: 'forms', pathMatch: 'full' },
        
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routeConfig)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }