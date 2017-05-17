import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { D3DemosComponent } from './d3Demos.component';

import { HubbleLawComponent } from './HubbleLaw/hubbleLaw.component';




const routeConfig: Routes = [
    {
        path: '',
        component: D3DemosComponent,
        children: [
            { path: 'hubble-law', component: HubbleLawComponent },
            { path: '', redirectTo: 'hubble-law', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routeConfig)
    ],
    exports: [RouterModule]
})
export class D3DemosRoutingModule { }