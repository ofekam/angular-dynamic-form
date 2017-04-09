/**
 * Created by ofek_am on 09/04/2017.
 */

import {ValidatorFn} from "@angular/forms";
export const Operators = {
  '==': 1,
  '>': 2,
  '<': 3,
  '!=': 4,
  '>=': 5,
  '<=': 6,
  '&&': 7,
  '||': 8
};

export interface UploadFn {
  (fils: any[]): void;
}

export class Condition {
  questionId: string | number;
  expectedValue: string | number;
  operator: number;
  parentId: number;
  children: Condition[];
}

export class Question {
  id: string | number;
  label: string;
  controlType: string;
  tooltipText: string;
  validations: ValidatorFn[];
  order: number;
  condition: Condition;
  value: any;

  constructor(options: {
                id?: string | number,
                label?: string,
                controlType?: string,
                tooltipText?: string,
                validations?: ValidatorFn[],
                order?: number,
                condition?: Condition,
                value?: any;
              }) {
    this.id = options.id;
    this.label = options.label;
    this.validations = options.validations;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.tooltipText = options.tooltipText;
    this.condition = options.condition;
    this.value = options.value;
  }
}

export class DropdownQuestions extends Question {

  choices: { key: any, value: any }[];

  constructor(options: {
                id?: string | number,
                label?: string,
                controlType?: string,
                tooltipText?: string,
                validations?: ValidatorFn[],
                order?: number,
                condition?: Condition,
                value?: any,
                choices?: { key: any, value: any }[]
              }) {
    super(options);
  }
}

export class InputQuestion extends Question {
  type: string;

  constructor(options: {
                id?: string | number,
                label?: string,
                controlType?: string,
                tooltipText?: string,
                validations?: ValidatorFn[],
                order?: number,
                condition?: Condition,
                value?: any,
                type: string
              }) {
    super(options);
    this.type = options.type;
  }
}

export class FileQuestion extends Question {
  uploadUrl: string;

  uploadFunc: UploadFn;

  DragDrop: boolean;

  constructor(options: {
                id?: string | number,
                label?: string,
                controlType?: string,
                tooltipText?: string,
                validations?: ValidatorFn[],
                order?: number,
                condition: Condition,
                value: any,
                uploadUrl: string,
                uploadFunc: UploadFn,
                DragDrop: boolean
              }) {
    super(options);
    this.uploadUrl = options.uploadUrl;
    this.uploadFunc = options.uploadFunc;
    this.DragDrop = options.DragDrop;
  }
}
