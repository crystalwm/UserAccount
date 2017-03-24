"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_component_1 = require("./forms.component");
var angularMaterial_component_1 = require("./angularMaterial/angularMaterial.component");
// import { FormsRoutingModule } from './forms-routing.module';
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule = __decorate([
    core_1.NgModule({
        imports: [
            // FormsRoutingModule,
            ng2_bootstrap_1.AlertModule
        ],
        declarations: [forms_component_1.FormsComponent, angularMaterial_component_1.AngularMaterialComponent]
    })
], FormsModule);
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map