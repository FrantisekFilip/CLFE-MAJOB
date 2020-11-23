import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentMethodModel } from '../../models/payment-method-model';
import { PaymentModel } from '../../models/payment-model';
import { PaymentResultModel } from '../../models/payment-result-model';
import { PaymentMethod } from '../../services/payment-method';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-express-payment-button',
  templateUrl: './express-payment-button.component.html',
  styleUrls: ['./express-payment-button.component.scss']
})
export class ExpressPaymentButtonComponent implements OnInit {
  @Input()
  public payment: PaymentModel;

  public get disabled(): boolean {
    return this.payment === null;
  }

  @Output()
  public readonly executedPayment: EventEmitter<PaymentResultModel> = new EventEmitter<PaymentResultModel>();

  constructor(private readonly paymentsService: PaymentsService) {
  }

  ngOnInit(): void {
  }

  public onClick(): () => void {
    return () => {
      if (!this.disabled) {
        const result = new PaymentResultModel();
        result.paymentMethod = new PaymentMethodModel(PaymentMethod.Express);
        result.success = this.paymentsService.executeExpressPayment(this.payment);
        this.executedPayment.emit(result);
      }
    };
  }
}
