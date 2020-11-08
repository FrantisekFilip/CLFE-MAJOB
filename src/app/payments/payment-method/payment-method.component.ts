import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentsService } from '../services/payments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  @Output() paymentSelected = new EventEmitter<string>();

  public isMain = true;
  public isExpress: boolean;
  public isDelayed: boolean;
  selectedPayment: string;

  constructor(private paymentsService: PaymentsService, private router: Router) { }

  ngOnInit(): void {
  }

  delayedPaymentClick(): void {
    this.isMain = false;
    this.isDelayed = true;
  }

  expressPaymentClick(): void {
    this.isMain = false;
    this.isExpress = true;
  }

  redirectHome(): void {
    this.router.navigate(['/home']);
  }

  switchPage(): void {
    this.paymentSelected.emit('selected');
    if (this.selectedPayment === 'expres-payment') {
      this.isMain = false;
      this.isExpress = true;
    }
    if (this.selectedPayment === 'delayed-payment') {
      this.isMain = false;
      this.isDelayed = true;
    }
  }

}
