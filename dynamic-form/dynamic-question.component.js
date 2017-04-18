"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ofek_am on 09/04/2017.
 */
var core_1 = require("@angular/core");
var question_1 = require("./question");
var forms_1 = require("@angular/forms");
var DynamicQuestionComponent = (function () {
    function DynamicQuestionComponent() {
    }
    DynamicQuestionComponent.prototype.upload = function () {
        if (this.question.controlType === 'file') {
            var question = this.question;
            var filesList = this['uploadInput'].files;
            if (filesList.length > 0) {
                if (question.uploadFunc !== undefined) {
                    question.uploadFunc(filesList);
                }
                else if (question.uploadUrl) {
                    var _loop_1 = function (i) {
                        var oReq = new XMLHttpRequest();
                        var file = filesList[i];
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
                        var blob = new Blob([filesList[i]]);
                        oReq.send(blob);
                    };
                    for (var i = 0; i < filesList.length; i++) {
                        _loop_1(i);
                    }
                }
            }
        }
    };
    return DynamicQuestionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_1.Question)
], DynamicQuestionComponent.prototype, "question", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], DynamicQuestionComponent.prototype, "form", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicQuestionComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicQuestionComponent.prototype, "labelClasses", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicQuestionComponent.prototype, "fileClasses", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicQuestionComponent.prototype, "filesListContainerClasses", void 0);
DynamicQuestionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dynamic-question',
        templateUrl: 'dynamic-question.component.html'
    }),
    __metadata("design:paramtypes", [])
], DynamicQuestionComponent);
exports.DynamicQuestionComponent = DynamicQuestionComponent;
//# sourceMappingURL=dynamic-question.component.js.map