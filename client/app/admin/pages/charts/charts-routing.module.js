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
//charts components
var charts_component_1 = require("./charts.component");
var routeConfig = [{
        path: '',
        component: charts_component_1.ChartsComponent,
        children: [
            { path: 'linechart-simple', component: lineChartSimple_component_1.LineChartSimpleComponent },
            { path: 'linechart-area', component: lineChartArea_component_1.LineChartAreaComponent },
            { path: 'linechart-bipolar', component: lineChartBipolar_component_1.LineChartBipolarComponent },
            { path: 'barchart-simple', component: barChartSimple_component_1.BarChartSimpleComponent },
            { path: 'barchart-multiline', component: barChartMultiline_component_1.BarChartMultilineComponent },
            { path: 'barchart-stecked', component: barChartStecked_component_1.BarChartSteckedComponent },
            { path: 'pie-simple', component: pieSimple_component_1.PieSimpleComponent },
            { path: 'pie-lable', component: pieLable_component_1.PieLableComponent },
            { path: 'donut', component: donut_component_1.DonutComponent }
        ]
    }];
var ChartsRoutingModule = (function () {
    function ChartsRoutingModule() {
    }
    return ChartsRoutingModule;
}());
ChartsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routeConfig)
        ],
        exports: [router_1.RouterModule]
    })
], ChartsRoutingModule);
exports.ChartsRoutingModule = ChartsRoutingModule;
//# sourceMappingURL=charts-routing.module.js.map