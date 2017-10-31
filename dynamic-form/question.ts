/**
 * Created by ofek_am on 09/04/2017.
 */

import { ValidatorFn } from "@angular/forms";
export const Operators = {
  Equals: 1,
  Greater: 2,
  Smaller: 3,
  Different: 4,
  GreaterEquals: 5,
  SmallerEquals: 6,
  And: 7,
  Or: 8
};

export interface UploadFn {
  (fils: any[]): void;
}

export class Condition {
  // questionId: string | number;
  // expectedValue: string | number;
  // operator: number;
  // parentId: number;
  // children: Condition[];

  constructor(
    public questionId: string | number,
    public expectedValue: string | number,
    public operator: number,
    public children?: Condition[]
  ) {

  }
}

export class Question {
  id: string | number;
  label: string;
  controlType?: string;
  tooltipText: string;
  validations: ValidatorFn[];
  order: number;
  condition: Condition;
  value: any;
  toHide: Boolean = false;

  constructor(options: {
    id: string | number,
    label: string,
    controlType?: string,
    tooltipText?: string,
    validations?: ValidatorFn[],
    order?: number,
    condition?: Condition,
    value?: any
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
    id: string | number,
    label: string,
    controlType?: string,
    choices: { key: any, value: any }[],
    tooltipText?: string,
    validations?: ValidatorFn[],
    order?: number,
    condition?: Condition,
    value?: any
  }) {
    super(options);
    this.choices = options.choices;
  }
}

export class InputQuestion extends Question {
  type: string;

  constructor(options: {
    id: string | number,
    label: string,
    controlType?: string,
    type: string,
    tooltipText?: string,
    validations?: ValidatorFn[],
    order?: number,
    condition?: Condition,
    value?: any
  }) {
    options.controlType = 'input';
    super(options);
    this.type = options.type;
  }
}

export class FileQuestion extends Question {
  uploadUrl: string;

  uploadFunc: UploadFn;

  DragDrop: boolean;

  constructor(options: {
    id: string | number,
    label: string,
    tooltipText?: string,
    controlType?: string,
    validations?: ValidatorFn[],
    order?: number,
    condition: Condition,
    value: any,
    uploadUrl: string,
    uploadFunc: UploadFn,
    DragDrop: boolean
  }) {
    options.controlType = 'file';
    super(options);
    this.uploadUrl = options.uploadUrl;
    this.uploadFunc = options.uploadFunc;
    this.DragDrop = options.DragDrop;
  }
}
