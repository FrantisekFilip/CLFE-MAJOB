import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent extends FormFieldDirective implements OnInit {
  private _value: string;

  public get iValue(): string {
    return this._value;
  }

  public set iValue(value: string) {
    this._value = value;

    if (value) {
      this.fieldControl.setValue(value);
    }
  }

  public get value(): Date {
    return this._value ? new Date(this._value) : null;
  }

  @Input()
  public set value(value: Date) {
    this.iValue = value?.toDateString();
  }

  protected OnConstruct(): { controlName: string, validators?: ValidatorFn[] } {
    return { controlName: 'dateField' };
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.fieldControl.valueChanges.subscribe(data => {
      this._value = data;
      this.valueChange.emit(this._value);
    });
  }
}
