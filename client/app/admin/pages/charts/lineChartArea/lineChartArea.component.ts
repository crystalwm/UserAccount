import { Component } from '@angular/core';

import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './lineChartArea.html'
})
export class LineChartAreaComponent {
    chart: Chart;
    constructor() {
        this.chart = {
            type: 'Line',
            data: datas['areaLineData'],
            options: datas['areaLineData'].options
        };
    }

}