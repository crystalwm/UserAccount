import { Component } from '@angular/core';

import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './pieLable.html'
})
export class PieLableComponent { 
        chart: Chart;
    constructor() {
        this.chart = {
            type: 'Pie',
            data: datas['labelsPieData'],
            options: datas['labelsPieData'].options
        };
    }
}