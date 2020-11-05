import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TerritorialScaleModel } from 'src/app/bu-services/models/enumerations';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { AggregateIndemnityModel, EmployeeCoinsuranceModel } from 'src/app/models/enumerations';

@Component({
  selector: 'app-employee-calculation-panel',
  templateUrl: './employee-calculation-panel.component.html',
  styleUrls: ['./employee-calculation-panel.component.scss']
})
export class EmployeeCalculationPanelComponent implements OnInit {
  selectedAggregateIndemnity: string;
  selectedTerritorialScale: string;
  mainVehiclesChecked: boolean;
  otherVehiclesChecked: boolean;
  viewAggregateIndemnity = '50 000 Kč';
  viewEmployeeCoinsurance: string;
  viewDiscount: string;
  viewYearlyInsurance: string;

  @Input()
  public parentForm: FormGroup;

  public readonly aggregateIndemnities: AggregateIndemnityModel[];

  public readonly territorialScales: TerritorialScaleModel[];

  public readonly employeeCoinsurances: EmployeeCoinsuranceModel[];

  constructor(enumerations: EnumerationsService) {
    this.aggregateIndemnities = enumerations.getModelValues(AggregateIndemnityModel);
    this.territorialScales = enumerations.getModelValues(TerritorialScaleModel);
    this.employeeCoinsurances = enumerations.getModelValues(EmployeeCoinsuranceModel);
    this.viewEmployeeCoinsurance = this.employeeCoinsurances[0].viewValue;
  }

  ngOnInit(): void {
  }
}
