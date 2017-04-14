import { Component } from '@angular/core';

import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './barChartSimple.html'
})
export class BarChartSimpleComponent {

    chart: Chart;
    constructor() {
        this.chart = {
            type: 'Bar',
            data: datas['simpleBarData'],
            options:  datas['simpleBarData'].options
        };
    }


}