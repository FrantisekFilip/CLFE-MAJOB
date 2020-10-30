import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AggregateIndemnity, EmployeeCoinsurance, TerritorialScale } from 'src/app/services/enumerations';

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

  aggregateIndemnities: AggregateIndemnity[] = [
    { code: 'ai-2', viewValue: '2 000 000 Kč', value: 2000000 },
    { code: 'ai-4', viewValue: '4 000 000 Kč', value: 4000000 },
    { code: 'ai-5', viewValue: '5 000 000 Kč', value: 5000000 },
    { code: 'ai-10', viewValue: '10 000 000 Kč', value: 10000000 },
    { code: 'ai-25', viewValue: '25 000 000 Kč', value: 25000000 }
  ];

  territorialScales: TerritorialScale[] = [
    { code: 'europe', viewValue: 'Evropa', value: 'Evropa' },
    { code: 'world', viewValue: 'Svět', value: 'Svět' }
  ];

  employeeCoinsurances: EmployeeCoinsurance[] = [
    {
      code: 'ecoin-1', viewValue: '0 Kč pro škody hrazené do výše spoluúčasti z havarijního pojištění (motokolo, motocykl, osobní a nákladní automobil, traktor a autobus \n 1 000 Kč pro ostatní škody'
    }
  ];

  constructor() {
    this.viewEmployeeCoinsurance = this.employeeCoinsurances[0].viewValue;
  }

  ngOnInit(): void {
  }
}
