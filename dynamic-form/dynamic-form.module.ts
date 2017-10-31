import { ConditionService } from './condition.service';
/**
 * Created by ofek_am on 09/04/2017.
 */
import { NgModule } from "@angular/core";

import { DynamicFormComponent } from "./dynamic-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { QuestionToControlService } from "./question-to-control.service";
import { DynamicQuestionComponent } from "./dynamic-question.component";
import { MapToIterablePipe } from "./map-to-iterable";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent, DynamicQuestionComponent, MapToIterablePipe],
  declarations: [DynamicFormComponent, DynamicQuestionComponent, MapToIterablePipe],
  providers: [
    QuestionToControlService
    , ConditionService],
})
export class DynamicFormModule {
}
