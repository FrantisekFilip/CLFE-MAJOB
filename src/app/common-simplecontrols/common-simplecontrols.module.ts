import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { BackButtonComponent } from './back-button/back-button.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { IconLabelComponent } from './icon-label/icon-label.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    BigButtonComponent,
    DownloadButtonComponent,
    InputFieldComponent,
    NextButtonComponent,
    IconLabelComponent,
    IconButtonComponent
  ],
  exports: [
    BackButtonComponent,
    BigButtonComponent,
    DownloadButtonComponent,
    IconButtonComponent,
    IconLabelComponent,
    InputFieldComponent,
    NextButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class CommonSimplecontrolsModule { }
