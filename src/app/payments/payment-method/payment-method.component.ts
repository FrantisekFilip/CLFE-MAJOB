import { Component, OnInit } from '@angular/core';
import { PaymentFinalScreenComponent } from '../payment-final-screen/payment-final-screen.component';
import { MatRadioModule } from '@angular/material/radio';
import { PaymentsService } from '../services/payments.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  public isMain: boolean = true;
  selectedPayment: string;

  constructor(private paymentsService: PaymentsService, private router: Router) { }

  ngOnInit(): void {
  }

  onRadioBtnChange($event) {
    console.log(this.paymentsService.getNewCalculation('kuk'));
    this.selectedPayment = $event.value;
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }

  switchPage() {
    if (this.selectedPayment === "expres-payment") {
    this.isMain = false;
    }
  }

}
