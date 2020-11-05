import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { TerritorialScaleModel } from 'src/app/bu-services/models/enumerations';
import { BaseFormPanelComponent } from 'src/app/common-controls/base-form-panel/base-form-panel.component';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { ContractParametersModel } from 'src/app/models/contract-parameters-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';
import { AggregateIndemnityModel, CoinsuranceModel } from '../../models/enumerations';
import { MoneyModel } from 'src/app/common-services/models/money-model';

@Component({
  selector: 'app-citizen-calculation-panel',
  templateUrl: './citizen-calculation-panel.component.html',
  styleUrls: ['./citizen-calculation-panel.component.scss']
})
export class CitizenCalculationPanelComponent extends BaseFormPanelComponent implements OnInit {
  private _model: ContractParametersModel;

  public get model(): ContractParametersModel {
    if (!this._model) {
      this._model = new ContractParametersModel();
    }

    return this._model;
  }

  public get selectedAggregateIndemnity(): string {
    return this.model.aggregateIndemnity?.code;
  }

  @Input()
  public set selectedAggregateIndemnity(value: string) {
    this.model.aggregateIndemnity = this.enumerations.getByCode(this.aggregateIndemnities, value);
  }

  public get selectedTerritorialScale(): string {
    return this.model.territorialScale?.code;
  }

  @Input()
  public set selectedTerritorialScale(value: string) {
    this.model.territorialScale = this.enumerations.getByCode(this.territorialScales, value);
  }

  public get selectedCoinsurance(): string {
    return this.model.coinsurance?.code;
  }

  @Input()
  public set selectedCoinsurance(value: string) {
    this.model.coinsurance = this.enumerations.getByCode(this.coinsurances, value);
  }

  public get discount(): number {
    return this.model.discount;
  }

  @Input()
  public set discount(value: number) {
    this.model.discount = value;
  }

  public get yearlyInsurance(): MoneyModel {
    return this.model.yearlyInsurance;
  }

  @Input()
  public set yearlyInsurance(value: MoneyModel) {
    this.model.yearlyInsurance = value;
  }

  @Input()
  public parentForm: FormGroup;

  public readonly aggregateIndemnities: AggregateIndemnityModel[];

  public readonly territorialScales: TerritorialScaleModel[];

  public readonly coinsurances: CoinsuranceModel[];

  constructor(private enumerations: EnumerationsService, dataService: ApplicationDataService) {
    super();
    this.aggregateIndemnities = enumerations.getModelValues(AggregateIndemnityModel);
    this.territorialScales = enumerations.getModelValues(TerritorialScaleModel);
    this.coinsurances = enumerations.getModelValues(CoinsuranceModel);
    this._model = dataService.application.contractParameters;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'CitizenCalculationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
