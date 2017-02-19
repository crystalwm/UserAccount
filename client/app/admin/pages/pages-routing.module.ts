import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';



const routeConfig: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'forms', pathMatch: 'full' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
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