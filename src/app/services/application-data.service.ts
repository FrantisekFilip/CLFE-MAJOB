import { Injectable } from '@angular/core';
import { AgreementsModel } from '../models/agreements-model';
import { ApplicationModel } from '../models/application-model';
import { PaymentModel } from '../payments/models/payment-model';
import { RuntimeError } from 'src/app/common-services/errorHandling/runtime-error';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {
  private readonly _application: ApplicationModel;
  private _currentPayment: PaymentModel;

  public get application(): ApplicationModel {
    return this._application;
  }

  public get currentPayment(): PaymentModel {
    return this._currentPayment;
  }

  constructor() {
    this._application = new ApplicationModel();
    const agreements = new AgreementsModel();
    agreements.preset(true);
    this.application.agreements = agreements;
  }

  public recreatePayment(): void {
    if (this._currentPayment?.result?.success) {
      throw new RuntimeError('Platba již proběhla.');
    }

    const payment = new PaymentModel(); // TODO create real payment model, here just making sure it is not null
    payment.amount = this.application?.totalYearlyInsurance;
    this._currentPayment = payment;
  }
}
