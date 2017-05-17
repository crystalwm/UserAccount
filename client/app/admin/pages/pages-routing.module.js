"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var routeConfig = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: 'dashboard', loadChildren: 'client/app/admin/pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'tables', loadChildren: 'client/app/admin/pages/tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: 'client/app/admin/pages/forms/forms.module#FormscModule' },
            { path: 'charts', loadChildren: 'client/app/admin/pages/charts/charts.module#ChartsModule' },
            { path: 'd3demos', loadChildren: 'client/app/admin/pages/D3Demos/d3Demos.module#D3DemosModule' },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    }
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routeConfig)
        ],
        exports: [router_1.RouterModule]
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/pages-routing.module.js.map