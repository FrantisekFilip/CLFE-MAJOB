import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseModel } from 'src/app/common-services/models/base-model';

@Component({
  selector: 'app-base-form-field',
  template: ``,
  styleUrls: ['./base-form-field.component.scss']
})
export class BaseFormFieldComponent implements OnInit {
  private _controlName: string;
  private _defaultValidators: ValidatorFn[];
  private _validators: ValidatorFn[];
  private _isRequired: boolean;

  public get controlName(): string {
    return this._controlName;
  }

  public get defaultValidators(): ValidatorFn[] {
    return this._defaultValidators;
  }

  @Input()
  public label: string;

  public get isRequired(): boolean {
    return this._isRequired;
  }

  @Input()
  public set isRequired(value: boolean) {
    this._isRequired = value;
    this.setValidators();
  }

  public get validators(): ValidatorFn[] {
    return this._validators;
  }

  @Input()
  public set validators(value: ValidatorFn[]) {
    this._validators = this.setValidators(value);
  }

  @Input()
  public placeholder: string;

  @Input()
  public parentForm: FormGroup;

  public readonly fieldControl: FormControl;

  constructor() {
    this._defaultValidators = [this.validator];
    this.fieldControl = new FormControl('', this._defaultValidators);
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: '' };
  }

  public ngOnInit(): void {
    const metadata = this.OnConstruct();
    this._controlName = metadata.controlName;

    if (metadata.validators) {
      this._defaultValidators = this.defaultValidators.concat(metadata.validators);
      this.fieldControl.setValidators(this._defaultValidators);
    }

    this.parentForm.addControl(this.controlName, this.fieldControl);
  }

  private setValidators(explicitValidators?: ValidatorFn[]): ValidatorFn[] {
    let validators = [...this._defaultValidators];

    if (this._isRequired) {
      validators.push(Validators.required);
    }

    if (explicitValidators && explicitValidators.length > 0) {
      validators = validators.concat(explicitValidators);
    }

    this.fieldControl.setValidators(validators);
    return validators;
  }

  protected validator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const model = control.value as BaseModel; // TODO - rewrite as helper cast function

      if (model) {
        return model.isValid ? null : model.getFirstError(); // TODO - return all errors?
      }
      else {
        return null;
      }
    };
  }
}
