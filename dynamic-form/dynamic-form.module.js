"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ofek_am on 09/04/2017.
 */
var core_1 = require("@angular/core");
var dynamic_form_component_1 = require("./dynamic-form.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var question_to_control_service_1 = require("./question-to-control.service");
var dynamic_question_component_1 = require("./dynamic-question.component");
var map_to_iterable_1 = require("./map-to-iterable");
var DynamicFormModule = (function () {
    function DynamicFormModule() {
    }
    return DynamicFormModule;
}());
DynamicFormModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.ReactiveFormsModule],
        exports: [dynamic_form_component_1.DynamicFormComponent, dynamic_question_component_1.DynamicQuestionComponent, map_to_iterable_1.MapToIterablePipe],
        declarations: [dynamic_form_component_1.DynamicFormComponent, dynamic_question_component_1.DynamicQuestionComponent, map_to_iterable_1.MapToIterablePipe],
        providers: [question_to_control_service_1.QuestionToControlService],
    })
], DynamicFormModule);
exports.DynamicFormModule = DynamicFormModule;
//# sourceMappingURL=dynamic-form.module.js.map