/**
 * Created by ofek_am on 09/04/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Question} from "./question";
import {FormGroup} from "@angular/forms";
import {QuestionToControlService} from "./question-to-control.service";

@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Question[];
  @Input() formClasses: string[];
  @Input() questionClasses: string[];
  @Input() labelClasses: string[];
  @Input() fileClasses: string[];
  @Input() filesListContainerClasses: string[];

  form: FormGroup;

  constructor(private qcs: QuestionToControlService) {
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
    debugger;
  }

}
