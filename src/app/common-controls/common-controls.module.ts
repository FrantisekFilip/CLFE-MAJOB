import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { BaseFormFieldComponent } from './forms/base-form-field/base-form-field.component';
import { BaseFormPanelComponent } from './forms//base-form-panel/base-form-panel.component';
import { EmailFieldComponent } from './forms//email-field/email-field.component';
import { BirthNumberFieldComponent } from './forms//birth-number-field/birth-number-field.component';
import { PhoneNumberFieldComponent } from './forms//phone-number-field/phone-number-field.component';
import { TextFieldComponent } from './forms//text-field/text-field.component';
import { DateFieldComponent } from './forms//date-field/date-field.component';
import { SelectFieldComponent } from './forms//select-field/select-field.component';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { BigButtonComponent } from './buttons/big-button/big-button.component';
import { DownloadButtonComponent } from './buttons/download-button/download-button.component';
import { NextButtonComponent } from './buttons/next-button/next-button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
import { StepperNextButtonComponent } from './stepper/stepper-next-button/stepper-next-button.component';
import { StepperBackButtonComponent } from './stepper/stepper-back-button/stepper-back-button.component';
import { StepperButtonsComponent } from './stepper/stepper-buttons/stepper-buttons.component';
import { IconLabelComponent } from './labels/icon-label/icon-label.component';

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
    SelectFieldComponent,
    BackButtonComponent,
    BigButtonComponent,
    DownloadButtonComponent,
    NextButtonComponent,
    IconButtonComponent,
    StepperNextButtonComponent,
    StepperBackButtonComponent,
    StepperButtonsComponent,
    IconLabelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FlexModule
  ],
  exports: [
    BaseFormFieldComponent,
    BaseFormPanelComponent,
    EmailFieldComponent,
    BirthNumberFieldComponent,
    PhoneNumberFieldComponent,
    TextFieldComponent,
    DateFieldComponent,
    BaseFormPanelComponent,
    SelectFieldComponent,
    BackButtonComponent,
    BigButtonComponent,
    DownloadButtonComponent,
    NextButtonComponent,
    IconButtonComponent,
    StepperNextButtonComponent,
    StepperBackButtonComponent,
    StepperButtonsComponent,
    IconLabelComponent
  ],
})
export class CommonControlsModule { }
