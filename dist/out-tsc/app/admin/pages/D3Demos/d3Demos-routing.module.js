var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { D3DemosComponent } from './d3Demos.component';
import { HubbleLawComponent } from './HubbleLaw/hubbleLaw.component';
var routeConfig = [
    {
        path: '',
        component: D3DemosComponent,
        children: [
            { path: 'hubble-law', component: HubbleLawComponent },
            { path: '', redirectTo: 'hubble-law', pathMatch: 'full' }
        ]
    }
];
var D3DemosRoutingModule = (function () {
    function D3DemosRoutingModule() {
    }
    return D3DemosRoutingModule;
}());
D3DemosRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routeConfig)
        ],
        exports: [RouterModule]
    })
], D3DemosRoutingModule);
export { D3DemosRoutingModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/D3Demos/d3Demos-routing.module.js.map