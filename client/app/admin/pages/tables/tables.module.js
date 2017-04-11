"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tables_routing_module_1 = require("./tables-routing.module");
var tables_component_1 = require("./tables.component");
var smartTable_component_1 = require("./smartTable/smartTable.component");
//basice component
var hoverRows_component_1 = require("./hoverRows/hoverRows.component");
var borderedTable_component_1 = require("./borderedTable/borderedTable.component");
var condensedTable_component_1 = require("./condensedTable/condensedTable.component");
var stripedTable_component_1 = require("./stripedTable/stripedTable.component");
var contextualRows_component_1 = require("./contextualRows/contextualRows.component");
var responsiveTable_component_1 = require("./responsiveTable/responsiveTable.component");
//third party component
var ng2_smart_table_1 = require("ng2-smart-table");
//the custom component
var theme_module_1 = require("../../theme/theme.module");
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            tables_routing_module_1.TableRoutingModule,
            ng2_smart_table_1.Ng2SmartTableModule,
            theme_module_1.ThemeModule,
            common_1.CommonModule
        ],
        declarations: [
            tables_component_1.TablesComponent,
            smartTable_component_1.SmartTableComponent,
            hoverRows_component_1.HoverRowsComponent,
            borderedTable_component_1.BorderedTableComponent,
            condensedTable_component_1.CondensedTableComponent,
            stripedTable_component_1.StripedTableComponent,
            contextualRows_component_1.ContextualRowsComponent,
            responsiveTable_component_1.ResponsiveTableComponent
        ]
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map