import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AggregateIndemnity, Coinsurance, TerritorialScale } from './../../../services/enumerations';

@Component({
  selector: 'app-citizen-calculation-panel',
  templateUrl: './citizen-calculation-panel.component.html',
  styleUrls: ['./citizen-calculation-panel.component.scss']
})
export class CitizenCalculationPanelComponent implements OnInit {
  selectedAggregateIndemnity: string;
  selectedTerritorialScale: string;
  selectedCoinsurance: string;
  viewDiscount: string;
  viewYearInsurance: string;

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

  coinsurances: Coinsurance[] = [
    { code: 'coin-1', viewValue: '1 000 Kč', value: 1000 },
    { code: 'coin-2', viewValue: '2 000 Kč', value: 2000 },
    { code: 'coin-3', viewValue: '3 000 Kč', value: 3000 },
    { code: 'coin-4', viewValue: '4 000 Kč', value: 4000 },
    { code: 'coin-5', viewValue: '5 000 Kč', value: 5000 }
  ];

  ngOnInit(): void {
  }
}
