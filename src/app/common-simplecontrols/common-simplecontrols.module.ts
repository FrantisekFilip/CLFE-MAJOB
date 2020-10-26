import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { NextButtonComponent } from './next-button/next-button.component';

@NgModule({
  declarations: [BigButtonComponent, DownloadButtonComponent, InputFieldComponent, NextButtonComponent],
  exports: [
    BigButtonComponent,
    DownloadButtonComponent,
    InputFieldComponent,
    NextButtonComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CommonSimplecontrolsModule { }
