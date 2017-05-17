var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { datas } from '../mock-data';
var BarChartSimpleComponent = (function () {
    function BarChartSimpleComponent() {
        this.chart = {
            type: 'Bar',
            data: datas['simpleBarData'],
            options: datas['simpleBarData'].options
        };
    }
    return BarChartSimpleComponent;
}());
BarChartSimpleComponent = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: './barChartSimple.html'
    }),
    __metadata("design:paramtypes", [])
], BarChartSimpleComponent);
export { BarChartSimpleComponent };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/charts/barChartSimple/barChartSimple.component.js.map