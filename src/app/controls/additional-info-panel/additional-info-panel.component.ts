import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { BaseFormPanelComponent } from 'src/app/common-controls/base-form-panel/base-form-panel.component';
import { AgreementsModel } from 'src/app/models/agreements-model';
import { ApplicationModel } from 'src/app/models/application-model';
import { ContractParametersModel } from 'src/app/models/contract-parameters-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-additional-info-panel',
  templateUrl: './additional-info-panel.component.html',
  styleUrls: ['./additional-info-panel.component.scss']
})
export class AdditionalInfoPanelComponent extends BaseFormPanelComponent implements OnInit {
  private readonly _model: ApplicationModel;

  public get commencementDate(): Date {
    return this._model.contractParameters?.commencementDate;
  }

  @Input()
  public set commencementDate(value: Date) {
    if (!this._model.contractParameters) {
      this._model.contractParameters = new ContractParametersModel();
    }

    this._model.contractParameters.commencementDate = value;
  }

  public get policyHolder(): ClientInfoModel {
    return this._model.policyHolder;
  }

  @Input()
  public set policyHolder(value: ClientInfoModel) {
    this._model.policyHolder = value;
  }

  public get mainAddress(): AddressModel {
    return this._model.mainAddress;
  }

  @Input()
  public set mainAddress(value: AddressModel) {
    this._model.mainAddress = value;
  }

  public get hasContactAddress(): boolean {
    return this._model.useContactAddress;
  }

  @Input()
  public set hasContactAddress(value: boolean) {
    this._model.useContactAddress = value;
  }

  public get hasInsuredPerson(): boolean {
    return this._model.useInsuredPerson;
  }

  @Input()
  public set hasInsuredPerson(value: boolean) {
    this._model.useInsuredPerson = value;
  }

  public get agreements(): AgreementsModel {
    return this._model.agreements;
  }

  public get agreementsAccepted(): boolean {
    return this._model.agreementsAccepted;
  }

  @Input()
  public set agreementsAccepted(value: boolean) {
    this._model.agreementsAccepted = value;
  }

  public get contactMethodsAllowed(): boolean {
    return this._model.contactMethodsAllowed;
  }

  @Input()
  public set contactMethodsAllowed(value: boolean) {
    this._model.contactMethodsAllowed = value;
  }

  @Input()
  public title: string;

  @Input()
  public parentForm: FormGroup;

  constructor(dataService: ApplicationDataService) {
    super();
    this._model = dataService.application;

    if (!this._model.policyHolder) {
      this._model.policyHolder = new ClientInfoModel();
    }

    if (!this._model.mainAddress) {
      this._model.mainAddress = new AddressModel();
    }
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'additionalInfoPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
