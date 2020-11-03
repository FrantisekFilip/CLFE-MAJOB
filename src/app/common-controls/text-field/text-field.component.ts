import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { BaseFormFieldComponent } from '../base-form-field/base-form-field.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends BaseFormFieldComponent implements OnInit {
  private _value: string;

  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value);
    }
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'textField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
