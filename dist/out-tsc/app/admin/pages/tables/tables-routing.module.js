var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smartTable/smartTable.component';
//basice component
import { HoverRowsComponent } from './hoverRows/hoverRows.component';
import { BorderedTableComponent } from './borderedTable/borderedTable.component';
import { CondensedTableComponent } from './condensedTable/condensedTable.component';
import { StripedTableComponent } from './stripedTable/stripedTable.component';
import { ContextualRowsComponent } from './contextualRows/contextualRows.component';
import { ResponsiveTableComponent } from './responsiveTable/responsiveTable.component';
var routeConfig = [{
        path: '',
        component: TablesComponent,
        children: [
            { path: 'smart-table', component: SmartTableComponent },
            { path: 'hover-rows', component: HoverRowsComponent },
            { path: 'bordered-table', component: BorderedTableComponent },
            { path: 'condensed-table', component: CondensedTableComponent },
            { path: 'striped-table', component: StripedTableComponent },
            { path: 'contextual-rows', component: ContextualRowsComponent },
            { path: 'responsive-table', component: ResponsiveTableComponent },
            { path: '', redirectTo: 'smart-table', pathMatch: 'full' }
        ]
    }];
var TableRoutingModule = (function () {
    function TableRoutingModule() {
    }
    return TableRoutingModule;
}());
TableRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routeConfig)
        ],
        exports: [RouterModule]
    })
], TableRoutingModule);
export { TableRoutingModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/tables/tables-routing.module.js.map