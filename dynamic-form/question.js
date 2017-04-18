/**
 * Created by ofek_am on 09/04/2017.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
exports.Operators = {
    '==': 1,
    '>': 2,
    '<': 3,
    '!=': 4,
    '>=': 5,
    '<=': 6,
    '&&': 7,
    '||': 8
};
var Condition = (function () {
    function Condition() {
    }
    return Condition;
}());
exports.Condition = Condition;
var Question = (function () {
    function Question(options) {
        this.id = options.id;
        this.label = options.label;
        this.validations = options.validations;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.tooltipText = options.tooltipText;
        this.condition = options.condition;
        this.value = options.value;
    }
    return Question;
}());
exports.Question = Question;
var DropdownQuestions = (function (_super) {
    __extends(DropdownQuestions, _super);
    function DropdownQuestions(options) {
        return _super.call(this, options) || this;
    }
    return DropdownQuestions;
}(Question));
exports.DropdownQuestions = DropdownQuestions;
var InputQuestion = (function (_super) {
    __extends(InputQuestion, _super);
    function InputQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.type = options.type;
        return _this;
    }
    return InputQuestion;
}(Question));
exports.InputQuestion = InputQuestion;
var FileQuestion = (function (_super) {
    __extends(FileQuestion, _super);
    function FileQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.uploadUrl = options.uploadUrl;
        _this.uploadFunc = options.uploadFunc;
        _this.DragDrop = options.DragDrop;
        return _this;
    }
    return FileQuestion;
}(Question));
exports.FileQuestion = FileQuestion;
//# sourceMappingURL=question.js.map