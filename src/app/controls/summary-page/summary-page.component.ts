import { Component, Input, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { InstalmentFrequencyModel } from 'src/app/bu-services/models/enumerations';
import { EmailModel } from 'src/app/common-services/models/email-model';
import { MoneyModel } from 'src/app/common-services/models/money-model';
import { PhoneNumberModel } from 'src/app/common-services/models/phone-number-model';
import { ApplicationModel } from 'src/app/models/application-model';
import { ContractParametersModel } from 'src/app/models/contract-parameters-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  private _model: ApplicationModel;
  private readonly _products: string[];

  public get products(): string[] {
    return this._products;
  }

  public get commencementDate(): Date {
    return this._model.commencementDate;
  }

  public get policyHolder(): ClientInfoModel {
    return this._model.policyHolder;
  }

  public get mainAddress(): AddressModel {
    return this._model.mainAddress;
  }

  public get email(): EmailModel {
    return this._model.policyHolder?.email;
  }

  public get phoneNumber(): PhoneNumberModel {
    return this._model.policyHolder?.phoneNumber;
  }

  public get totalYearlyInsurance(): MoneyModel {
    return this._model.totalYearlyInsurance;
  }

  public get instalmentFrequency(): InstalmentFrequencyModel {
    return this._model.instalments?.frequency;
  }

  public get payment(): MoneyModel {
    return this._model.instalments?.payment;
  }

  @Input()
  public title: string;

  constructor(dataService: ApplicationDataService) {
    this._model = dataService.application;
    const products: string[] = [];
    SummaryPageComponent.addProduct(products, this._model.citizenInsuranceParameters);
    SummaryPageComponent.addProduct(products, this._model.employeeInsuranceParameters);
    this._products = products;
  }

  private static addProduct(products: string[], parameters: ContractParametersModel): void {
    if (parameters && parameters.doApply) {
      products.push(parameters.product.name);
    }
  }

  ngOnInit(): void {
  }
}
