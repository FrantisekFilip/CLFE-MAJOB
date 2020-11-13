import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { CdkStepperModule } from '@angular/cdk/stepper';
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
import { AddSectionButtonComponent } from './buttons/add-section-button/add-section-button.component';
import { RemoveSectionButtonComponent } from './buttons/remove-section-button/remove-section-button.component';
import { NavigationButtonComponent } from './buttons/navigation-button/navigation-button.component';
import { ExpandButtonComponent } from './buttons/expand-button/expand-button.component';
import { CollapseButtonComponent } from './buttons/collapse-button/collapse-button.component';
import { SwitchButtonComponent } from './buttons/switch-button/switch-button.component';
import { PercentLabelComponent } from './labels/percent-label/percent-label.component';
import { MoneyLabelComponent } from './labels/money-label/money-label.component';
import { LabelComponent } from './labels/label/label.component';
import { SlideToggleComponent } from './checkers/slide-toggle/slide-toggle.component';
import { TextLabelComponent } from './labels/text-label/text-label.component';
import { CheckboxComponent } from './checkers/checkbox/checkbox.component';
import { DateLabelComponent } from './labels/date-label/date-label.component';
import { PhoneNumberLabelComponent } from './labels/phone-number-label/phone-number-label.component';
import { EmailLabelComponent } from './labels/email-label/email-label.component';
import { EnumerationLabelComponent } from './labels/enumeration-label/enumeration-label.component';
import { ActionButtonComponent } from './buttons/action-button/action-button.component';
import { VerticalStepperComponent } from './stepper/vertical-stepper/vertical-stepper.component';
import {  BigRadioButtonComponent } from './radio/big-radio-button/big-radio-button.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { CustomStepperHeaderButtonComponent } from './custom-stepper/custom-stepper-header-button/custom-stepper-header-button.component';
import { VarDirective } from './directives/var.directive';
import { RichTranslatePipe } from './pipes/rich-translate.pipe';
import { TranslatedLabelComponent } from './labels/translated-label/translated-label.component';

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
    IconLabelComponent,
    AddSectionButtonComponent,
    RemoveSectionButtonComponent,
    NavigationButtonComponent,
    ExpandButtonComponent,
    CollapseButtonComponent,
    SwitchButtonComponent,
    PercentLabelComponent,
    MoneyLabelComponent,
    LabelComponent,
    SlideToggleComponent,
    TextLabelComponent,
    CheckboxComponent,
    DateLabelComponent,
    PhoneNumberLabelComponent,
    EmailLabelComponent,
    EnumerationLabelComponent,
    ActionButtonComponent,
    VerticalStepperComponent,
    BigRadioButtonComponent,
    CustomStepperComponent,
    CustomStepperHeaderButtonComponent,
    VarDirective,
    RichTranslatePipe,
    TranslatedLabelComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatRippleModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    FlexModule,
    CdkStepperModule
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
    IconLabelComponent,
    AddSectionButtonComponent,
    RemoveSectionButtonComponent,
    NavigationButtonComponent,
    ExpandButtonComponent,
    CollapseButtonComponent,
    SwitchButtonComponent,
    PercentLabelComponent,
    MoneyLabelComponent,
    LabelComponent,
    SlideToggleComponent,
    TextLabelComponent,
    CheckboxComponent,
    DateLabelComponent,
    PhoneNumberLabelComponent,
    EmailLabelComponent,
    EnumerationLabelComponent,
    ActionButtonComponent,
    VerticalStepperComponent,
    BigRadioButtonComponent,
    CustomStepperComponent,
    VarDirective,
    RichTranslatePipe,
    TranslatedLabelComponent
  ],
})
export class CommonControlsModule {
  static forRoot(): ModuleWithProviders<CommonControlsModule> {
    return {
      ngModule: CommonControlsModule,
      providers: [RichTranslatePipe],
    };
  }
}
