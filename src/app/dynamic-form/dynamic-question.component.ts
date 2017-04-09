/**
 * Created by ofek_am on 09/04/2017.
 */
import {Component, Input} from "@angular/core";
import {FileQuestion, Question} from "./question";
import {FormGroup} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'dynamic-question',
  templateUrl: 'dynamic-question.component.html'
})
export class DynamicQuestionComponent {

  @Input() question: Question;
  @Input() form: FormGroup;
  @Input() classes: string[];
  @Input() labelClasses: string[];
  @Input() fileClasses: string[];
  @Input() filesListContainerClasses: string[];

  constructor() {
  }

  upload() {
    if (this.question.controlType === 'file') {
      let question = this.question as FileQuestion;
      let filesList = this['uploadInput'].files;
      if (filesList.length > 0) {
        if (question.uploadFunc !== undefined) {
          question.uploadFunc(filesList);
        }
        else if (question.uploadUrl) {
          for (let i = 0; i < filesList.length; i++) {
            let oReq = new XMLHttpRequest();
            let file = filesList[i];
            oReq.open('POST', question.uploadUrl, true);
            oReq.upload.addEventListener('progress', function (evt) {
              if (evt['lengthComputable']) {
                file.progress = Math.round((evt['loaded'] / evt['total']) * 100) + '%';
              }
            }, false);
            oReq.onloadstart = function (e) {
              file.message = 'started';
            };
            oReq.onloadend = function (e) {
              file.message = e.target['response'] === '' ? 'Couldnt reach the server, Try again late' : e.target['response'];
            };

            let blob = new Blob([filesList[i]]);
            oReq.send(blob);
          }
        }
      }
    }
  }

}
