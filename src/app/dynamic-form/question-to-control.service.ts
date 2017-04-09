/**
 * Created by ofek_am on 09/04/2017.
 */
import {Injectable} from "@angular/core";
import {Question} from "./question";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class QuestionToControlService {

  constructor() {
  }

  toFormGroup(questions: Question[]) {
    let form: { [key: string]: FormControl } = {};
    questions.forEach((q: Question): void => {
      form[q.id] = new FormControl(q.value || '', q.validations);
    });

    return new FormGroup(form);
  }

}
