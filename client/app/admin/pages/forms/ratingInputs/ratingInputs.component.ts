import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './ratingInputs.html'
})
export class RatingInputsComponentt {
    public _rate1: number = 3;
    public _rate2: number = 4;

    public _max1: number = 5;
    public _max2: number = 10;

    constructor() {
    }

}