import { Component } from '@angular/core';

import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './barChartMultiline.html'
})
export class BarChartMultilineComponent {
    chart: Chart;
    constructor() {
        this.chart = {
            type: 'Bar',
            data: datas['multiBarData'],
            options: datas['multiBarData'].options,
            responsiveOptions:datas['multiBarData'].responsiveOptions
        };
    }

}