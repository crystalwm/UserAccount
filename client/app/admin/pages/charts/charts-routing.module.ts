import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
//charts components
import { ChartsComponent } from './charts.component';

const routeConfig: Routes = [{
    path: '',
    component: ChartsComponent,
    children: [
        { path: 'linechart-simple', component: LineChartSimpleComponent },
        { path: 'linechart-area', component: LineChartAreaComponent },
        { path: 'linechart-bipolar', component: LineChartBipolarComponent },
        { path: 'barchart-simple', component: BarChartSimpleComponent },
        { path: 'barchart-multiline', component: BarChartMultilineComponent },
        { path: 'barchart-stecked', component: BarChartSteckedComponent },
        { path: 'pie-simple', component: PieSimpleComponent },
        { path: 'pie-lable', component: PieLableComponent },
        { path: 'donut', component: DonutComponent }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routeConfig)
    ],
    exports: [RouterModule]

})
export class ChartsRoutingModule { }