var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { StandardFieldsComponent } from './standardFields/standardFields.component';
import { ValidationStatesComponent } from './validationStates/validationStates.component';
import { InputGroupsComponent } from './inputGroups/inputGroups.component';
import { RatingInputsComponentt } from './ratingInputs/ratingInputs.component';
import { SelectInputsComponent } from './selectInputs/selectInputs.component';
import { CheckBoxesAndRadiosComponent } from './checkBoxesAndRadios/checkBoxesAndRadios.component';
import { PictureUploaderComponent } from './pictureUploader/pictureUploader.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { LayoutBasciFormComponent } from './layoutBasicForm/layoutBascicForm.component';
import { LayoutBlockFormComponent } from './layoutBlockForm/layoutBlockForm.component';
import { LayoutHorizontalForm } from './layoutHorizontalForm/layoutHorizontalForm.component';
import { LayoutInlineFormComponent } from './layoutInlineForm/layoutInlineForm.component';
import { LayoutWithoutLabelsFormComponent } from './layoutWithoutLabelsForm/layoutWithoutLabelsForm.component';
// noinspection TypeScriptValidateTypes
var routeConfig = [
    {
        path: '',
        component: FormsComponent,
        children: [
            { path: 'standard-fields', component: StandardFieldsComponent },
            { path: 'validation-states', component: ValidationStatesComponent },
            { path: 'input-groups', component: InputGroupsComponent },
            { path: 'rating-inputs', component: RatingInputsComponentt },
            { path: 'select-inputs', component: SelectInputsComponent },
            { path: 'checkboxes-radios', component: CheckBoxesAndRadiosComponent },
            { path: 'picture-uploader', component: PictureUploaderComponent },
            { path: 'ckeditor', component: CkeditorComponent },
            { path: 'layout-basci-form', component: LayoutBasciFormComponent },
            { path: 'layout-block-form', component: LayoutBlockFormComponent },
            { path: 'layout-inline-form', component: LayoutInlineFormComponent },
            { path: 'layout-horizontal-form', component: LayoutHorizontalForm },
            { path: 'layout-without-lable-form', component: LayoutWithoutLabelsFormComponent },
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
    NgModule({
        imports: [
            RouterModule.forChild(routeConfig)
        ],
        exports: [RouterModule]
    })
], FormsRoutingModule);
export { FormsRoutingModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/forms/forms-routing.module.js.map