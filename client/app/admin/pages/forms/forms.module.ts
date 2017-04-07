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



import { LayoutBasciFormComponent } from './layoutBasicForm/layoutBascicForm.component';
import { LayoutBlockFormComponent } from './layoutBlockForm/layoutBlockForm.component';
import { LayoutHorizontalForm } from './layoutHorizontalForm/layoutHorizontalForm.component';
import { LayoutInlineFormComponent } from './layoutInlineForm/layoutInlineForm.component';
import { LayoutWithoutLabelsFormComponent } from './layoutWithoutLabelsForm/layoutWithoutLabelsForm.component';
import { AlertModule, RatingModule, TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgUploaderModule } from 'ngx-uploader';




@NgModule({
    imports: [
        FormsRoutingModule,
        CommonModule,
        FormsModule,
        ThemeModule,
        AlertModule.forRoot(),
        RatingModule.forRoot(),
        NgUploaderModule
    ],
    declarations: [
        FormsComponent,
        ValidationStatesComponent,
        StandardFieldsComponent,
        InputGroupsComponent,
        RatingInputsComponentt,
        SelectInputsComponent,
        CheckBoxesAndRadiosComponent,
        LayoutBasciFormComponent,
        LayoutBlockFormComponent,
        LayoutHorizontalForm,
        LayoutInlineFormComponent,
        LayoutWithoutLabelsFormComponent,
        PictureUploaderComponent
    ]

})
export class FormscModule { }