import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-final-screen',
  templateUrl: './payment-final-screen.component.html',
  styleUrls: ['./payment-final-screen.component.scss']
})
export class PaymentFinalScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }

}
