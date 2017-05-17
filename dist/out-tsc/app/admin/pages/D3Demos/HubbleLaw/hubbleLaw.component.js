var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import * as d3 from 'd3';
var HubbleLawComponent = (function () {
    function HubbleLawComponent(chartContainer) {
        this.margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        };
        this.hubble_data = [{
                nebulae: "NGC 6822",
                distance: 0.500,
                distance_error: 0.010,
                velocity: 57,
                velocity_error: 2
            }, {
                nebulae: "NGC 221",
                distance: 0.763,
                distance_error: 0.024,
                velocity: 200,
                velocity_error: 6
            }, {
                nebulae: "NGC 598",
                distance: 0.833,
                distance_error: 0.105,
                velocity: 179,
                velocity_error: 3
            }];
        this.chartContainer = chartContainer;
    }
    HubbleLawComponent.prototype.ngOnInit = function () {
        this.createChart();
    };
    HubbleLawComponent.prototype.createChart = function () {
        var element = this.chartContainer.nativeElement;
        this.width = 640 - this.margin.left - this.margin.right;
        this.height = 400 - this.margin.top - this.margin.bottom;
        var svg = d3.select(element).append("svg")
            .attr("height", this.height + this.margin.left + this.margin.right)
            .attr("width", this.width + this.margin.top + this.margin.bottom);
        this.chart = svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        this.xScale = d3.scaleLinear().range([0, this.width]);
        this.yScale = d3.scaleLinear().range([this.height, 0]);
        this.xScale.domain([
            d3.min(this.hubble_data, function (nebulae) {
                return nebulae.distance - nebulae.distance_error;
            }),
            d3.max(this.hubble_data, function (nebulae) {
                return this.nebulae.distance + nebulae.distance_error;
            })
        ]).nice();
        this.yScale.domain([
            d3.min(this.hubble_data, function (nebulae) {
                return nebulae.distance - nebulae.distance_error;
            }),
            d3.max(this.hubble_data, function (nebulae) {
                return nebulae.distance + nebulae.distance_error;
            })
        ]).nice();
    };
    return HubbleLawComponent;
}());
HubbleLawComponent = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: './hubbleLaw.html'
    }),
    __metadata("design:paramtypes", [ElementRef])
], HubbleLawComponent);
export { HubbleLawComponent };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/D3Demos/HubbleLaw/hubbleLaw.component.js.map