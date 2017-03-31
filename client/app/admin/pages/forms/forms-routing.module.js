"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var forms_component_1 = require("./forms.component");
var standardFields_component_1 = require("./standardFields/standardFields.component");
var validationStates_component_1 = require("./validationStates/validationStates.component");
var inputGroups_component_1 = require("./inputGroups/inputGroups.component");
var ratingInputs_component_1 = require("./ratingInputs/ratingInputs.component");
var selectInputs_component_1 = require("./selectInputs/selectInputs.component");
var checkBoxesAndRadios_component_1 = require("./checkBoxesAndRadios/checkBoxesAndRadios.component");
var layoutBascicForm_component_1 = require("./layoutBasicForm/layoutBascicForm.component");
var layoutBlockForm_component_1 = require("./layoutBlockForm/layoutBlockForm.component");
var layoutHorizontalForm_component_1 = require("./layoutHorizontalForm/layoutHorizontalForm.component");
var layoutInlineForm_component_1 = require("./layoutInlineForm/layoutInlineForm.component");
var layoutWithoutLabelsForm_component_1 = require("./layoutWithoutLabelsForm/layoutWithoutLabelsForm.component");
// noinspection TypeScriptValidateTypes
var routeConfig = [
    {
        path: '',
        component: forms_component_1.FormsComponent,
        children: [
            { path: 'standard-fields', component: standardFields_component_1.StandardFieldsComponent },
            { path: 'validation-states', component: validationStates_component_1.ValidationStatesComponent },
            { path: 'input-groups', component: inputGroups_component_1.InputGroupsComponent },
            { path: 'rating-inputs', component: ratingInputs_component_1.RatingInputsComponentt },
            { path: 'select-inputs', component: selectInputs_component_1.SelectInputsComponent },
            { path: 'checkboxes-radios', component: checkBoxesAndRadios_component_1.CheckBoxesAndRadiosComponent },
            { path: 'layout-basci-form', component: layoutBascicForm_component_1.LayoutBasciFormComponent },
            { path: 'layout-block-form', component: layoutBlockForm_component_1.LayoutBlockFormComponent },
            { path: 'layout-inline-form', component: layoutHorizontalForm_component_1.LayoutHorizontalForm },
            { path: 'layout-horizontal-form', component: layoutInlineForm_component_1.LayoutInlineFormComponent },
            { path: 'layout-without-lable-form', component: layoutWithoutLabelsForm_component_1.LayoutWithoutLabelsFormComponent },
            { path: '', redirectTo: 'validation-states', pathMatch: 'full' }
        ]
    }
];
var FormsRoutingModule = (function () {
    function FormsRoutingModule() {
    }
    return FormsRoutingModule;
}());
FormsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routeConfig)
        ],
        exports: [router_1.RouterModule]
    })
], FormsRoutingModule);
exports.FormsRoutingModule = FormsRoutingModule;
//# sourceMappingURL=forms-routing.module.js.map