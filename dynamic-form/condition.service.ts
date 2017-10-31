import { FormGroup } from '@angular/forms';
import { Question, Condition, Operators } from './question';
import { Injectable } from '@angular/core';

@Injectable()
export class ConditionService {

    constructor() { }

    checkQuestion(question: Question, form: FormGroup) {
        let res = true;
        if (question.condition) {
            res = this.checkCondition(question.condition, form);
        }

        question.toHide = !res;
    }


    private checkCondition(condition: Condition, form: FormGroup) {
        let currentControl = form.controls[condition.questionId];
        let currentValue = currentControl ? currentControl.value : undefined;

        switch (condition.operator) {
            case Operators.Equals: return condition.expectedValue == currentValue;
            case Operators.Greater: return condition.expectedValue < currentValue;
            case Operators.Smaller: return condition.expectedValue > currentValue;
            case Operators.Different: return condition.expectedValue != currentValue;
            case Operators.GreaterEquals: return condition.expectedValue <= currentValue;
            case Operators.SmallerEquals: return condition.expectedValue >= currentValue;
            case Operators.And: return this.checkAnd(condition, form);
            case Operators.Or: return this.checkOr(condition, form);

        }
    }

    private checkAnd(condition: Condition, form: FormGroup) {
        if (condition.children) {
            for (let child of condition.children) {
                if (!this.checkCondition(child, form)) return false;
            }

            return true;
        }
    }

    private checkOr(condition: Condition, form: FormGroup) {
        if (condition.children) {
            for (let child of condition.children) {
                if (this.checkCondition(child, form)) return true;
            }

            return false;
        }
    }
}