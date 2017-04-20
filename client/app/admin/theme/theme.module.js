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
var common_1 = require("@angular/common");
var wmHeader_component_1 = require("./components/wmHeader/wmHeader.component");
var wmSidebar_component_1 = require("./components/wmSidebar/wmSidebar.component");
var wmCard_component_1 = require("./components/wmCard/wmCard.component");
var wmMenu_component_1 = require("./components/wmMenu/wmMenu.component");
var wmChartist_component_1 = require("./components/wmChartist/wmChartist.component");
//provider
var menu_service_1 = require("./components/wmMenu/menu.service");
var ThemeModule = (function () {
    function ThemeModule() {
    }
    return ThemeModule;
}());
ThemeModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [
            wmHeader_component_1.WmHeaderComponent, wmSidebar_component_1.WmSidebarComponent,
            wmCard_component_1.WmCardComponent, wmMenu_component_1.WmMenuComponent,
            wmChartist_component_1.WmChartistComponent
        ],
        providers: [menu_service_1.MenuService],
        exports: [
            wmHeader_component_1.WmHeaderComponent, wmSidebar_component_1.WmSidebarComponent,
            wmCard_component_1.WmCardComponent, wmMenu_component_1.WmMenuComponent,
            wmChartist_component_1.WmChartistComponent
        ]
    })
], ThemeModule);
exports.ThemeModule = ThemeModule;
//# sourceMappingURL=theme.module.js.map