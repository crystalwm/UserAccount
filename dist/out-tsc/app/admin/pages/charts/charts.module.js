var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../theme/theme.module';
//third party module
import { ChartistModule } from 'ng-chartist';
//--------component--------------
//line chart
import { LineChartSimpleComponent } from './lineChartSimple/lineChartSimple.component';
import { LineChartAreaComponent } from './lineChartArea/lineChartArea.component';
import { LineChartBipolarComponent } from './lineChartBipolar/lineChartBipolar.component';
//bar chart
import { BarChartSimpleComponent } from './barChartSimple/barChartSimple.component';
import { BarChartMultilineComponent } from './barChartMultiline/barChartMultiline.component';
import { BarChartSteckedComponent } from './barChartStecked/barChartStecked.component';
//pie chart
import { PieLableComponent } from './pieLable/pieLable.component';
import { PieSimpleComponent } from './pieSimple/pieSimple.component';
//donut
import { DonutComponent } from './donut/donut.component';
//router
import { ChartsRoutingModule } from './charts-routing.module';
//charts components
import { ChartsComponent } from './charts.component';
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    NgModule({
        imports: [
            ChartsRoutingModule,
            ThemeModule,
            ChartistModule
        ],
        declarations: [
            ChartsComponent,
            LineChartSimpleComponent,
            LineChartAreaComponent,
            LineChartBipolarComponent,
            BarChartSimpleComponent,
            BarChartMultilineComponent,
            BarChartSteckedComponent,
            PieLableComponent,
            PieSimpleComponent,
            DonutComponent,
        ]
    })
], ChartsModule);
export { ChartsModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/charts/charts.module.js.map