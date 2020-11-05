import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonSimplecontrolsModule } from './../common-simplecontrols/common-simplecontrols.module';
import { BaseFormFieldComponent } from './base-form-field/base-form-field.component';
import { BaseFormPanelComponent } from './base-form-panel/base-form-panel.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { BirthNumberFieldComponent } from './birth-number-field/birth-number-field.component';
import { PhoneNumberFieldComponent } from './phone-number-field/phone-number-field.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';

@NgModule({
  declarations: [
    BaseFormFieldComponent,
    BaseFormPanelComponent,
    EmailFieldComponent,
    BirthNumberFieldComponent,
    PhoneNumberFieldComponent,
    TextFieldComponent,
    DateFieldComponent,
    BaseFormPanelComponent,
    SelectFieldComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonSimplecontrolsModule
  ],
  exports: [
    BaseFormFieldComponent,
    BaseFormPanelComponent,
    EmailFieldComponent,
    BirthNumberFieldComponent,
    PhoneNumberFieldComponent,
    TextFieldComponent,
    DateFieldComponent
  ],
})
export class CommonControlsModule { }
