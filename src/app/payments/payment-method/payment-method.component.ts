import { Component, OnInit } from '@angular/core';
import { PaymentFinalScreenComponent } from '../payment-final-screen/payment-final-screen.component';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  public isMain: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  switchPage() {
    this.isMain = false;
  }

}
