import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { BackButtonComponent } from './back-button/back-button.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { IconLabelComponent } from './icon-label/icon-label.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { StepperNextButtonComponent } from './stepper-next-button/stepper-next-button.component';
import { StepperBackButtonComponent } from './stepper-back-button/stepper-back-button.component';
import { StepperButtonsComponent } from './stepper-buttons/stepper-buttons.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    BigButtonComponent,
    DownloadButtonComponent,
    InputFieldComponent,
    NextButtonComponent,
    IconLabelComponent,
    IconButtonComponent,
    StepperNextButtonComponent,
    StepperBackButtonComponent,
    StepperButtonsComponent
  ],
  exports: [
    BackButtonComponent,
    BigButtonComponent,
    DownloadButtonComponent,
    IconButtonComponent,
    IconLabelComponent,
    InputFieldComponent,
    NextButtonComponent,
    StepperNextButtonComponent,
    StepperBackButtonComponent,
    StepperButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class CommonSimplecontrolsModule { }
