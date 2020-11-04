import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delayed-payment-final',
  templateUrl: './delayed-payment-final.component.html',
  styleUrls: ['./delayed-payment-final.component.scss'],
})
export class DelayedPaymentFinalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.location.hash = 'no-back-button';
    window.location.hash = 'Again-No-back-button';
    window.onhashchange = function () {
      window.location.hash = 'no-back-button';
    };
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }
}
