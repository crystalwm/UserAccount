"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_module_1 = require("../../theme/theme.module");
//third party module
var ng_chartist_1 = require("ng-chartist");
//--------component--------------
//line chart
var lineChartSimple_component_1 = require("./lineChartSimple/lineChartSimple.component");
var lineChartArea_component_1 = require("./lineChartArea/lineChartArea.component");
var lineChartBipolar_component_1 = require("./lineChartBipolar/lineChartBipolar.component");
//bar chart
var barChartSimple_component_1 = require("./barChartSimple/barChartSimple.component");
var barChartMultiline_component_1 = require("./barChartMultiline/barChartMultiline.component");
var barChartStecked_component_1 = require("./barChartStecked/barChartStecked.component");
//pie chart
var pieLable_component_1 = require("./pieLable/pieLable.component");
var pieSimple_component_1 = require("./pieSimple/pieSimple.component");
//donut
var donut_component_1 = require("./donut/donut.component");
//router
var charts_routing_module_1 = require("./charts-routing.module");
//charts components
var charts_component_1 = require("./charts.component");
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            charts_routing_module_1.ChartsRoutingModule,
            theme_module_1.ThemeModule,
            ng_chartist_1.ChartistModule
        ],
        declarations: [
            charts_component_1.ChartsComponent,
            lineChartSimple_component_1.LineChartSimpleComponent,
            lineChartArea_component_1.LineChartAreaComponent,
            lineChartBipolar_component_1.LineChartBipolarComponent,
            barChartSimple_component_1.BarChartSimpleComponent,
            barChartMultiline_component_1.BarChartMultilineComponent,
            barChartStecked_component_1.BarChartSteckedComponent,
            pieLable_component_1.PieLableComponent,
            pieSimple_component_1.PieSimpleComponent,
            donut_component_1.DonutComponent,
        ]
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/charts/charts.module.js.map