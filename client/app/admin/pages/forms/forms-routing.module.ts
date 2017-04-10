import { Routes, RouterModule } from '@angular/router';
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
const routeConfig: Routes = [
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




@NgModule({
  imports: [
    RouterModule.forChild(routeConfig)
  ],
  exports: [RouterModule]
})
export class FormsRoutingModule { }



