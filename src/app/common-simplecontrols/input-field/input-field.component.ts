import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  private _defaultValidators = [];
  private _required: boolean;
  private _minLength: number;
  private _maxLength: number;
  private _validators: ValidatorFn[];

  get required(): boolean {
    return this._required;
  }

  @Input()
  set required(value: boolean) {
    this._required = value;
    this.setValidators();
  }

  get minLength(): number {
    return this._minLength;
  }

  @Input()
  set minLength(value: number) {
    this._minLength = value;
    this.setValidators();
  }

  get maxLength(): number {
    return this._maxLength;
  }

  @Input()
  set maxLength(value: number) {
    this._maxLength = value;
    this.setValidators();
  }

  get validators(): ValidatorFn[] {
    return this._validators;
  }

  @Input()
  set validators(value: ValidatorFn[]) {
    this._validators = value;
    this.setValidators();
  }

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public parentForm: FormGroup;

  public readonly inputFieldFormControl = new FormControl('', this._defaultValidators);

  constructor() { }

  ngOnInit(): void {
    this.parentForm.addControl('inputField', this.inputFieldFormControl);
  }

  setValidators(): void {
    const validators = [...this._defaultValidators];

    if (this._required) {
      const result = validators.push(Validators.required);
    }

    if (this._minLength) {
      const result = validators.push(Validators.minLength(this._minLength));
    }

    if (this._maxLength) {
      const result = validators.push(Validators.maxLength(this._maxLength));
    }

    if (this._validators) {
      const result = validators.push(this._validators);
    }

    this.inputFieldFormControl.setValidators(validators);
  }
}
