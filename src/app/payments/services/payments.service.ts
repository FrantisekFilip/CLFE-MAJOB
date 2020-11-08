import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  public createPayment() {
    return 'funguju';
  }

  public getNewCalculation(typeOfPayment: string) {
    return 'getNewCalculation works';
  }
}
