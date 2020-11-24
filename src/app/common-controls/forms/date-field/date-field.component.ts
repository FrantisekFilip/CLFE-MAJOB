import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Moment } from 'moment';
import { FormFieldDirective } from '../form-field.directive';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent extends FormFieldDirective implements OnInit {
  private _value: Moment;

  public get value(): Moment {
    return this._value;
  }

  @Input()
  public set value(value: Moment) {
    this._value = value;
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
