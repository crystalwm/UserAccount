import * as Chartist from 'chartist';

import {
    ChartType,
    ChartEvent
} from '../../theme/components/wmChartist/wmChartist.component';

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options ? : any;
    responsiveOptions ? : any;
    events ? : ChartEvent;
}