import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';


import { StandardFieldsComponent } from './standardFields/standardFields.component';
import { ValidationStatesComponent } from './validationStates/validationStates.component';
import { FormsRoutingModule } from './forms-routing.module';
import { InputGroupsComponent } from './inputGroups/inputGroups.component';
import { RatingInputsComponentt } from './ratingInputs/ratingInputs.component';
import { SelectInputsComponent } from './selectInputs/selectInputs.component';

import { LayoutBasciFormComponent } from './layoutBasicForm/layoutBascicForm.component';
import { LayoutBlockFormComponent } from './layoutBlockForm/layoutBlockForm.component';
import { LayoutHorizontalForm } from './layoutHorizontalForm/layoutHorizontalForm.component';
import { LayoutInlineFormComponent } from './layoutInlineForm/layoutInlineForm.component';
import { LayoutWithoutLabelsFormComponent } from './layoutWithoutLabelsForm/layoutWithoutLabelsForm.component';
import { AlertModule, RatingModule, TabsModule } from 'ng2-bootstrap/ng2-bootstrap';



@NgModule({
    imports: [
        FormsRoutingModule,
        CommonModule,
        FormsModule,
        AlertModule.forRoot(),
        RatingModule.forRoot()
    ],
    declarations: [FormsComponent,
        ValidationStatesComponent,
        StandardFieldsComponent,
        InputGroupsComponent,
        RatingInputsComponentt,
        SelectInputsComponent,
        LayoutBasciFormComponent,
        LayoutBlockFormComponent,
        LayoutHorizontalForm,
        LayoutInlineFormComponent,
        LayoutWithoutLabelsFormComponent
    ]

})
export class FormscModule { }