import { Component } from '@angular/core';
import { Chart } from '../chart';

import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './lineChartBipolar.html'
})
export class LineChartBipolarComponent {
    chart: Chart;
    constructor() {
        this.chart = {
            type: 'Line',
            data: datas['biLineData'],
            options: datas['biLineData'].options
        };
    }
}