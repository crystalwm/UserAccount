import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'hover-rows',
    templateUrl: './hoverRows.html'
})
export class HoverRowsComponent {
    metricsTableData = [
        {
            browser: 'Google Chrome', visits: 10392, isVisitsUp: true,
            purchases: 4214, isPurchasesUp: true, percent: 45, isPercentUp: true
        },
        {
            browser: 'Mozilla Firefox', visits: 7873, isVisitsUp: true,
            purchases: 3031, isPurchasesUp: false, percent: 28, isPercentUp: true
        },
        {
            browser: 'Internet Explorer', visits: 5890, isVisitsUp: false,
            purchases: 2102, isPurchasesUp: false, percent: 17, isPercentUp: false
        },
        {
            browser: 'Safari', visits: 4001, isVisitsUp: false,
            purchases: 1001, isPurchasesUp: false, percent: 14, isPercentUp: true
        },
        {
            browser: 'Opera', visits: 1833, isVisitsUp: true,
            purchases: 83, isPurchasesUp: true, percent: 5, isPercentUp: true
        }
    ]

}