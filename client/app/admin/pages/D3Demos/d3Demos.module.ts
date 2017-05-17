import { NgModule } from '@angular/core';

import { D3DemosRoutingModule } from './d3Demos-routing.module';

import { D3DemosComponent } from './d3Demos.component';

import {HubbleLawComponent} from './HubbleLaw/hubbleLaw.component';


@NgModule({
    imports: [
        D3DemosRoutingModule
    ],
    declarations: [
        D3DemosComponent,
        HubbleLawComponent
    ]
})
export class D3DemosModule { }