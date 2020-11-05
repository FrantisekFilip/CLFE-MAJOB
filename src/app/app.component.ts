import { Component } from '@angular/core';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';
import { InstalmentFrequencyModel, TerritorialScaleModel } from 'src/app/bu-services/models/enumerations';
import { AggregateIndemnityModel, CoinsuranceModel, EmployeeCoinsuranceModel } from './models/enumerations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CLFE-Majob';

  constructor(enumerations: EnumerationsService) {
    enumerations.setModelValues(InstalmentFrequencyModel, [
      { code: 'ins-monthly', viewValue: 'monthly' },
      { code: 'ins-half-yearly', viewValue: 'half-yearly' },
      { code: 'ins-quarterly', viewValue: 'quarterly' },
      { code: 'ins-yearly', viewValue: 'yearly' }
    ]);
    enumerations.setModelValues(TerritorialScaleModel, [
      { code: 'europe', viewValue: 'Evropa', value: 'Evropa' },
      { code: 'world', viewValue: 'Svět', value: 'Svět' }
    ]);
    enumerations.setModelValues(AggregateIndemnityModel, [
      { code: 'ai-2', viewValue: '2 000 000 Kč', value: 2000000 },
      { code: 'ai-4', viewValue: '4 000 000 Kč', value: 4000000 },
      { code: 'ai-5', viewValue: '5 000 000 Kč', value: 5000000 },
      { code: 'ai-10', viewValue: '10 000 000 Kč', value: 10000000 },
      { code: 'ai-25', viewValue: '25 000 000 Kč', value: 25000000 }
    ]);
    enumerations.setModelValues(CoinsuranceModel, [
      { code: 'coin-1', viewValue: '1 000 Kč', value: 1000 },
      { code: 'coin-2', viewValue: '2 000 Kč', value: 2000 },
      { code: 'coin-3', viewValue: '3 000 Kč', value: 3000 },
      { code: 'coin-4', viewValue: '4 000 Kč', value: 4000 },
      { code: 'coin-5', viewValue: '5 000 Kč', value: 5000 }
    ]);
    enumerations.setModelValues(EmployeeCoinsuranceModel, [
      {
        code: 'ecoin-1', viewValue: '0 Kč pro škody hrazené do výše spoluúčasti z havarijního pojištění (motokolo, motocykl, osobní a nákladní automobil, traktor a autobus \n 1 000 Kč pro ostatní škody'
      }
    ]);
  }
}
