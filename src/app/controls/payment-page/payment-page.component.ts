import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit, Optional } from '@angular/core';
import { PaymentModel } from 'src/app/payments/models/payment-model';
import { PaymentResultModel } from 'src/app/payments/models/payment-result-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  @Input()
  public title: string;

  public payment: PaymentModel;

  constructor(private dataService: ApplicationDataService, @Optional() private stepper: CdkStepper) {
  }

  ngOnInit(): void {
    this.dataService.recreatePayment();
    this.payment = this.dataService.currentPayment;
  }

  public onPayment(result: PaymentResultModel): void {
    this.payment.result = result;

    if (result.success && this.stepper) {
      this.stepper.next();
    }
  }
}
