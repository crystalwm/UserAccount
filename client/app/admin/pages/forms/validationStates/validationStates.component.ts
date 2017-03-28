import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './validationStates.html',
    styleUrls: ['./validationStates.css']
})
export class ValidationStatesComponent {
    public checkboxModel = [{
        name: 'Checkbox with success',
        state: false,
        class: 'has-success checkbox'
    }, {
        name: 'Checkbox with warning',
        state: false,
        class: 'has-warning checkbox',
    }, {
        name: 'Checkbox with error',
        state: false,
        class: 'has-error checkbox'
    }];

    public checkboxPropertiesMapping = {
        model: 'state',
        value: 'name',
        label: 'name',
        baCheckboxClass: 'class'
    };

    constructor() {
    }
}