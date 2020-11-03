import { Component, OnInit } from '@angular/core';
import { InstalmentFrequency } from 'src/app/services/enumerations';

@Component({
  selector: 'app-calculation-summary-panel',
  templateUrl: './calculation-summary-panel.component.html',
  styleUrls: ['./calculation-summary-panel.component.scss']
})
export class CalculationSummaryPanelComponent implements OnInit {
  viewTotalInsurance: string;
  viewFrequency: string;
  viewInstalment: string;

  instalmentFrequencies: InstalmentFrequency[] = [
    { code: 'ins-monthly', viewValue: 'monthly' },
    { code: 'half-yearly', viewValue: 'half-yearly' },
    { code: 'ins-quarterly', viewValue: 'quarterly' },
    { code: 'ins-yearly', viewValue: 'Yearly' }
  ];

  constructor() {
    this.viewFrequency = this.instalmentFrequencies[2].viewValue;
  }

  ngOnInit(): void {
  }
}
