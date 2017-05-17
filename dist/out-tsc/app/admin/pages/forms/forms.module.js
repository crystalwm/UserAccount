var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';
import { ThemeModule } from '../../theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
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
import { AlertModule, RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
//third part component
import { NgUploaderModule } from 'ngx-uploader';
import { CKEditorModule } from 'ng2-ckeditor';
var FormscModule = (function () {
    function FormscModule() {
    }
    return FormscModule;
}());
FormscModule = __decorate([
    NgModule({
        imports: [
            FormsRoutingModule,
            CommonModule,
            FormsModule,
            ThemeModule,
            AlertModule.forRoot(),
            RatingModule.forRoot(),
            NgUploaderModule,
            CKEditorModule
        ],
        declarations: [
            FormsComponent,
            ValidationStatesComponent,
            StandardFieldsComponent,
            InputGroupsComponent,
            RatingInputsComponentt,
            SelectInputsComponent,
            CheckBoxesAndRadiosComponent,
            CkeditorComponent,
            LayoutBasciFormComponent,
            LayoutBlockFormComponent,
            LayoutHorizontalForm,
            LayoutInlineFormComponent,
            LayoutWithoutLabelsFormComponent,
            PictureUploaderComponent
        ]
    })
], FormscModule);
export { FormscModule };
//# sourceMappingURL=E:/Sonicwall/project/Sonicwall_demo/Sonicwall_demo/typescript-angular2-client/app/admin/pages/forms/forms.module.js.map