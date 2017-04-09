import {Component} from "@angular/core";
import {InputQuestion, Question} from "./dynamic-form/question";
import {Validators} from "@angular/forms";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div>
    <dynamic-form [questions]="questions"></dynamic-form>
  </div>
  `,
})
export class AppComponent {
  name = 'Angular';
  questions: Question[] = [
    new InputQuestion({
      id: 1,
      // value: 'test',
      controlType: 'input',
      type: 'text',
      label: 'I am test input',
      order: 1,
      validations: [Validators.required]
    })
  ];

}
