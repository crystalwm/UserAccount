"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var forms_component_1 = require("./forms.component");
var angularMaterial_component_1 = require("./angularMaterial/angularMaterial.component");
// noinspection TypeScriptValidateTypes
var routeConfig = [
    {
        path: '',
        component: forms_component_1.FormsComponent,
        children: [
            { path: '', redirectTo: 'material', pathMatch: 'full' },
            { path: 'material', component: angularMaterial_component_1.AngularMaterialComponent }
        ]
    }
];
var FormsRoutingModule = (function () {
    function FormsRoutingModule() {
    }
    return FormsRoutingModule;
}());
FormsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routeConfig)
        ],
        exports: [router_1.RouterModule]
    })
], FormsRoutingModule);
exports.FormsRoutingModule = FormsRoutingModule;
//# sourceMappingURL=forms-routing.module.js.map