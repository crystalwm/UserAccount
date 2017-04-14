import {Component} from '@angular/core';


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


@Component({
    moduleId:module.id,
    selector:'charts',
    template:`
        <router-outlet></router-outlet>
    `
})
export class ChartsComponent{}