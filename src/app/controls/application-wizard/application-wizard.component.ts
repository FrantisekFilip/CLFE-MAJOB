import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper/public-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-wizard',
  template: ``,
  styles: [
  ]
})
export class ApplicationWizardComponent implements OnInit {
  private static readonly _calcStepName = 'calcStep';
  private static readonly _addInfoStepName = 'addInfoStep';
  private static readonly _summaryStepName = 'summaryStep';
  public selectedIndex = 0;
  public calcForm: FormGroup;
  public addInfoForm: FormGroup;
  public summaryPage: FormGroup;

  constructor(private router: Router, private routes: ActivatedRoute) {
    this.calcForm = new FormGroup({});
    this.addInfoForm = new FormGroup({});
    this.summaryPage = new FormGroup({});
  }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(param => {
      const step = param[0];

      if (step === ApplicationWizardComponent._addInfoStepName) {
        this.selectedIndex = 1;
      }
      else if (step === ApplicationWizardComponent._summaryStepName) {
        this.selectedIndex = 2;
      } else {
        this.selectedIndex = 0;
      }
    });
  }

  public stepperChanged(event: StepperSelectionEvent): void {
    let stepName: string;

    if (event.selectedIndex === 0) {
      stepName = ApplicationWizardComponent._calcStepName;
    }
    else if (event.selectedIndex === 1) {
      stepName = ApplicationWizardComponent._addInfoStepName;
    }
    else {
      stepName = ApplicationWizardComponent._summaryStepName;
    }

    this.router.navigate([], { queryParams: { step: stepName } });
  }
}
