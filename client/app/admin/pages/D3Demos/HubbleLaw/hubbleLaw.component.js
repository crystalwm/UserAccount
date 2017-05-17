"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3 = require("d3");
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
        var _this = this;
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
                return nebulae.distance + nebulae.distance_error;
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
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(d3.axisBottom(this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(d3.axisLeft(this.yScale));
        this.chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + this.height + ")")
            .append("text")
            .attr("x", this.width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text("Distance (Mpc)");
        this.chart.append("g")
            .attr("class", "y axis")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Red Shift Velocity (km/s)");
        this.hubble_data.forEach(function (nebulae) {
            _this.chart.append("rect")
                .attr("x", _this.xScale(nebulae.distance - nebulae.distance_error))
                .attr("width", Math.abs(_this.xScale(2 * nebulae.distance_error)))
                .attr("y", _this.yScale(nebulae.velocity - nebulae.velocity_error))
                .attr("height", _this.height - _this.yScale(2 * nebulae.velocity_error))
                .style("fill", "red");
        });
        this.chart.append("line")
            .attr("x1", this.xScale(0))
            .attr("y1", this.yScale(0))
            .attr("x2", this.xScale(20))
            .attr("y2", this.yScale(1400))
            .style("stroke", "#300083");
    };
    return HubbleLawComponent;
}());
HubbleLawComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './hubbleLaw.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HubbleLawComponent);
exports.HubbleLawComponent = HubbleLawComponent;
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/D3Demos/HubbleLaw/hubbleLaw.component.js.map