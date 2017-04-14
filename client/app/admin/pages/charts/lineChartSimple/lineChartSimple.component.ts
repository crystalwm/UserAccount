import { Component } from '@angular/core';

import {Chart} from '../chart';
import {datas} from '../mock-data';

@Component({
    moduleId: module.id,
    templateUrl: './lineChartSimple.html'
})
export class LineChartSimpleComponent { 

    chart:Chart;
    constructor(){
        this.chart={
            type:'Line',
            data: datas['Line']
        };
    }

}