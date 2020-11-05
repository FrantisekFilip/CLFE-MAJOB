import { Component, OnInit } from '@angular/core';
import { InstalmentFrequencyModel } from 'src/app/bu-services/models/enumerations';
import { EnumerationsService } from 'src/app/common-services/services/enumerations.service';

@Component({
  selector: 'app-calculation-summary-panel',
  templateUrl: './calculation-summary-panel.component.html',
  styleUrls: ['./calculation-summary-panel.component.scss']
})
export class CalculationSummaryPanelComponent implements OnInit {
  viewTotalInsurance: string;
  viewFrequency: string;
  viewInstalment: string;

  public readonly instalmentFrequencies: InstalmentFrequencyModel[];

  constructor(enumerations: EnumerationsService) {
    this.instalmentFrequencies = enumerations.getModelValues(InstalmentFrequencyModel);
    this.viewFrequency = this.instalmentFrequencies[2].viewValue;
  }

  ngOnInit(): void {
  }
}
