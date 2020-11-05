import { Injectable } from '@angular/core';
import { AgreementsModel } from '../models/agreements-model';
import { ApplicationModel } from '../models/application-model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {
  private readonly _application: ApplicationModel;

  get application(): ApplicationModel {
    return this._application;
  }

  constructor() {
    this._application = new ApplicationModel();
    const agreements = new AgreementsModel();
    agreements.preset(true);
    this.application.agreements = agreements;
  }
}
