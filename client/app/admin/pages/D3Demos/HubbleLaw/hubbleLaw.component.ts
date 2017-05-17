import { Component, ElementRef, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
    moduleId: module.id,
    templateUrl: './hubbleLaw.html'
})
export class HubbleLawComponent implements OnInit {
    constructor(chartContainer: ElementRef) {
        this.chartContainer = chartContainer;
    }

    ngOnInit() {
        this.createChart();
    }

    private margin: any = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    };
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private colors: any;
    private xAxis: any;
    private yAxis: any;
    private chartContainer: ElementRef;
    private hubble_data: any = [{
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

    createChart() {
        let element = this.chartContainer.nativeElement;
        this.width = 640 - this.margin.left - this.margin.right;
        this.height = 400 - this.margin.top - this.margin.bottom;

        let svg = d3.select(element).append("svg")
            .attr("height", this.height + this.margin.left + this.margin.right)
            .attr("width", this.width + this.margin.top + this.margin.bottom);

        this.chart = svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        this.xScale = d3.scaleLinear().range([0, this.width]);
        this.yScale = d3.scaleLinear().range([this.height, 0]);




        this.xScale.domain([
            d3.min(this.hubble_data, function (nebulae: any) {
                return nebulae.distance - nebulae.distance_error;
            }),
            d3.max(this.hubble_data, function (nebulae: any) {
                return nebulae.distance + nebulae.distance_error;
            })
        ]).nice();

        this.yScale.domain([
            d3.min(this.hubble_data, function (nebulae: any) {
                return nebulae.distance - nebulae.distance_error;
            }),
            d3.max(this.hubble_data, function (nebulae: any) {
                return nebulae.distance + nebulae.distance_error;
            })
        ]).nice();


        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
            .call(d3.axisBottom(this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
            .call(d3.axisLeft(this.yScale));



        this.chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + this.height + ")")
      //      .call(this.xAxis)
            .append("text")
            .attr("x", this.width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text("Distance (Mpc)");

        this.chart.append("g")
            .attr("class", "y axis")
        //    .call(this.yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Red Shift Velocity (km/s)")

        this.hubble_data.forEach((nebulae: any)=> {
            this.chart.append("rect")
                .attr("x", this.xScale(nebulae.distance - nebulae.distance_error))
                .attr("width", Math.abs(this.xScale(2 * nebulae.distance_error)))
                .attr("y", this.yScale(nebulae.velocity - nebulae.velocity_error))
                .attr("height", this.height - this.yScale(2 * nebulae.velocity_error))
                .style("fill", "red");
        });

     

        this.chart.append("line")
            .attr("x1", this.xScale(0))
            .attr("y1", this.yScale(0))
            .attr("x2", this.xScale(20))
            .attr("y2", this.yScale(1400))
            .style("stroke", "#300083");

    }
}