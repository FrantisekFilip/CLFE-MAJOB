import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentFinalScreenComponent } from './payment-final-screen/payment-final-screen.component';



@NgModule({
  declarations: [PaymentWizardComponent, PaymentMethodComponent, PaymentFinalScreenComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PaymentMethodComponent
  ]
})
export class PaymentsModule { }
