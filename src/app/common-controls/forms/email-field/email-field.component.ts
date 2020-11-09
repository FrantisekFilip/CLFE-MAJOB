import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { BaseFormFieldComponent } from '../base-form-field/base-form-field.component';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})
export class EmailFieldComponent extends BaseFormFieldComponent implements OnInit {
  private _value: EmailModel;

  get value(): EmailModel {
    return this._value;
  }

  @Input()
  set value(value: EmailModel) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value.value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'emailField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
