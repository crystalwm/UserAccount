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
var tables_component_1 = require("./tables.component");
var smartTable_component_1 = require("./smartTable/smartTable.component");
//basice component
var hoverRows_component_1 = require("./hoverRows/hoverRows.component");
var borderedTable_component_1 = require("./borderedTable/borderedTable.component");
var condensedTable_component_1 = require("./condensedTable/condensedTable.component");
var stripedTable_component_1 = require("./stripedTable/stripedTable.component");
var contextualRows_component_1 = require("./contextualRows/contextualRows.component");
var responsiveTable_component_1 = require("./responsiveTable/responsiveTable.component");
var routeConfig = [{
        path: '',
        component: tables_component_1.TablesComponent,
        children: [
            { path: 'smart-table', component: smartTable_component_1.SmartTableComponent },
            { path: 'hover-rows', component: hoverRows_component_1.HoverRowsComponent },
            { path: 'bordered-table', component: borderedTable_component_1.BorderedTableComponent },
            { path: 'condensed-table', component: condensedTable_component_1.CondensedTableComponent },
            { path: 'striped-table', component: stripedTable_component_1.StripedTableComponent },
            { path: 'contextual-rows', component: contextualRows_component_1.ContextualRowsComponent },
            { path: 'responsive-table', component: responsiveTable_component_1.ResponsiveTableComponent },
            { path: '', redirectTo: 'smart-table', pathMatch: 'full' }
        ]
    }];
var TableRoutingModule = (function () {
    function TableRoutingModule() {
    }
    return TableRoutingModule;
}());
TableRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routeConfig)
        ],
        exports: [router_1.RouterModule]
    })
], TableRoutingModule);
exports.TableRoutingModule = TableRoutingModule;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/tables/tables-routing.module.js.map