import { Component } from '@angular/core';

import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './barChartStecked.html'
})
export class BarChartSteckedComponent {
    chart: Chart;
    constructor() {
        this.chart = {
            type: 'Bar',
            data: datas['stackedBarData'],
            options: datas['stackedBarData'].options
        };
    }

 }