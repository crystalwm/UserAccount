import { Component } from '@angular/core';


import { Chart } from '../chart';
import { datas } from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './pieSimple.html'
})
export class PieSimpleComponent {
    chart: Chart;
    constructor() {
        this.chart = {
            type: 'Pie',
            data: datas['simplePieData'],
            options: datas['simplePieData'].options
        };
    }
}