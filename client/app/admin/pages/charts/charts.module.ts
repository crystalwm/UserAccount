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


@NgModule({
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
export class ChartsModule { }