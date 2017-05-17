var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smartTable/smartTable.component';
//basice component
import { HoverRowsComponent } from './hoverRows/hoverRows.component';
import { BorderedTableComponent } from './borderedTable/borderedTable.component';
import { CondensedTableComponent } from './condensedTable/condensedTable.component';
import { StripedTableComponent } from './stripedTable/stripedTable.component';
import { ContextualRowsComponent } from './contextualRows/contextualRows.component';
import { ResponsiveTableComponent } from './responsiveTable/responsiveTable.component';
//third party component
import { Ng2SmartTableModule } from 'ng2-smart-table';
//the custom component
import { ThemeModule } from '../../theme/theme.module';
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    NgModule({
        imports: [
            TableRoutingModule,
            Ng2SmartTableModule,
            ThemeModule,
            CommonModule
        ],
        declarations: [
            TablesComponent,
            SmartTableComponent,
            HoverRowsComponent,
            BorderedTableComponent,
            CondensedTableComponent,
            StripedTableComponent,
            ContextualRowsComponent,
            ResponsiveTableComponent
        ]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/tables/tables.module.js.map