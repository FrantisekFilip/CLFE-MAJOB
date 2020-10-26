import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentWizardComponent } from './payment/payment-wizard/payment-wizard.component';

@NgModule({
  declarations: [PaymentWizardComponent],
  exports: [
    PaymentWizardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuControlsModule { }
