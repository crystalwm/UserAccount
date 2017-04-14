import { Component } from '@angular/core';

import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './donut.html'
})
export class DonutComponent {
        chart: Chart;
    constructor() {
        this.chart = {
            type: 'Pie',
            data: datas['simpleDonutData'],
            options: datas['simpleDonutData'].options
        };
    }
 }