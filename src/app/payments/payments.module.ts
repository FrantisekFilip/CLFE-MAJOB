import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';



@NgModule({
  declarations: [PaymentWizardComponent, PaymentMethodComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PaymentMethodComponent
  ]
})
export class PaymentsModule { }
