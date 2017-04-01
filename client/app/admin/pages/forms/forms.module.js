"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_component_1 = require("./forms.component");
var theme_module_1 = require("../../theme/theme.module");
var standardFields_component_1 = require("./standardFields/standardFields.component");
var validationStates_component_1 = require("./validationStates/validationStates.component");
var forms_routing_module_1 = require("./forms-routing.module");
var inputGroups_component_1 = require("./inputGroups/inputGroups.component");
var ratingInputs_component_1 = require("./ratingInputs/ratingInputs.component");
var selectInputs_component_1 = require("./selectInputs/selectInputs.component");
var checkBoxesAndRadios_component_1 = require("./checkBoxesAndRadios/checkBoxesAndRadios.component");
var pictureUploader_component_1 = require("./pictureUploader/pictureUploader.component");
var layoutBascicForm_component_1 = require("./layoutBasicForm/layoutBascicForm.component");
var layoutBlockForm_component_1 = require("./layoutBlockForm/layoutBlockForm.component");
var layoutHorizontalForm_component_1 = require("./layoutHorizontalForm/layoutHorizontalForm.component");
var layoutInlineForm_component_1 = require("./layoutInlineForm/layoutInlineForm.component");
var layoutWithoutLabelsForm_component_1 = require("./layoutWithoutLabelsForm/layoutWithoutLabelsForm.component");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ngx_uploader_1 = require("ngx-uploader");
var FormscModule = (function () {
    function FormscModule() {
    }
    return FormscModule;
}());
FormscModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_routing_module_1.FormsRoutingModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            theme_module_1.ThemeModule,
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.RatingModule.forRoot(),
            ngx_uploader_1.NgUploaderModule
        ],
        declarations: [forms_component_1.FormsComponent,
            validationStates_component_1.ValidationStatesComponent,
            standardFields_component_1.StandardFieldsComponent,
            inputGroups_component_1.InputGroupsComponent,
            ratingInputs_component_1.RatingInputsComponentt,
            selectInputs_component_1.SelectInputsComponent,
            checkBoxesAndRadios_component_1.CheckBoxesAndRadiosComponent,
            layoutBascicForm_component_1.LayoutBasciFormComponent,
            layoutBlockForm_component_1.LayoutBlockFormComponent,
            layoutHorizontalForm_component_1.LayoutHorizontalForm,
            layoutInlineForm_component_1.LayoutInlineFormComponent,
            layoutWithoutLabelsForm_component_1.LayoutWithoutLabelsFormComponent,
            pictureUploader_component_1.PictureUploaderComponent
        ]
    })
], FormscModule);
exports.FormscModule = FormscModule;
//# sourceMappingURL=forms.module.js.map