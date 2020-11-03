import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { BaseModel } from 'src/app/common-services/models/base-model';

@Component({
  selector: 'app-base-form-field',
  template: ``,
  styleUrls: ['./base-form-field.component.scss']
})
export class BaseFormFieldComponent implements OnInit {
  private _controlName: string;
  private _defaultValidators: ValidatorFn[];

  public get controlName(): string {
    return this._controlName;
  }

  public get defaultValidators(): ValidatorFn[] {
    return this._defaultValidators;
  }

  @Input()
  public label: string;

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

  validator(): ValidatorFn {
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
