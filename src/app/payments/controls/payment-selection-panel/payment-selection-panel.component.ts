import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentModel } from '../../models/payment-model';
import { PaymentResultModel } from '../../models/payment-result-model';
import { PaymentMethod } from '../../services/payment-method';

@Component({
  selector: 'app-payment-selection-panel',
  templateUrl: './payment-selection-panel.component.html',
  styleUrls: ['./payment-selection-panel.component.scss']
})
export class PaymentSelectionPanelComponent implements OnInit {
  @Input()
  public payment: PaymentModel;

  @Output()
  public readonly executedPayment: EventEmitter<PaymentResultModel> = new EventEmitter<PaymentResultModel>();

  public get goPayRetry(): boolean {
    const result = this.payment?.result;
    return result && !result.success && result.paymentMethod.value === PaymentMethod.Express;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onExecutedPayment(result: PaymentResultModel): void {
    this.executedPayment.emit(result);
  }
}
