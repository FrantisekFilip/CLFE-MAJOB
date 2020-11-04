import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentWizardComponent } from './payment-wizard/payment-wizard.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentFinalScreenComponent } from './payment-final-screen/payment-final-screen.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { CommonSimplecontrolsModule } from '../common-simplecontrols/common-simplecontrols.module';
import { MatButtonModule } from '@angular/material/button';
import { PaymentsService } from './services/payments.service';
import { DelayedPaymentFinalComponent } from './delayed-payment-final/delayed-payment-final.component';



@NgModule({
  declarations: [PaymentWizardComponent, PaymentMethodComponent, PaymentFinalScreenComponent, DelayedPaymentFinalComponent],
  imports: [
    CommonModule,
    CommonSimplecontrolsModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatStepperModule,
    FlexModule,
    MatButtonModule
  ],
  exports: [
    PaymentMethodComponent
  ],
  providers: [PaymentsService]
})
export class PaymentsModule { }
