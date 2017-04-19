import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';




const routeConfig: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', loadChildren: 'client/app/admin/pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'tables', loadChildren: 'client/app/admin/pages/tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: 'client/app/admin/pages/forms/forms.module#FormscModule' },
            { path: 'charts', loadChildren: 'client/app/admin/pages/charts/charts.module#ChartsModule' },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

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