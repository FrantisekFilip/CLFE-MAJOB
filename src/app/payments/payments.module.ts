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



@NgModule({
  declarations: [PaymentWizardComponent, PaymentMethodComponent, PaymentFinalScreenComponent],
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
  ]
})
export class PaymentsModule { }
