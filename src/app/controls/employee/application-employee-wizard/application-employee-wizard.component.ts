import { StepperSelectionEvent } from '@angular/cdk/stepper/public-api';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-employee-wizard',
  templateUrl: './application-employee-wizard.component.html',
  styleUrls: ['./application-employee-wizard.component.scss']
})
export class ApplicationEmployeeWizardComponent implements OnInit {
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

  submit(): void {
  }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(param => {
      const step = param[0];

      if (step === ApplicationEmployeeWizardComponent._calcStepName) {
        this.selectedIndex = 0;
      }
      else if (step === ApplicationEmployeeWizardComponent._addInfoStepName) {
        this.selectedIndex = 1;
      } else {
        this.selectedIndex = 2;
      }
    });
  }

  stepperChanged(event: StepperSelectionEvent): void {
    let stepName: string;

    if (event.selectedIndex === 0) {
      stepName = ApplicationEmployeeWizardComponent._calcStepName;
    }
    else if (event.selectedIndex === 1) {
      stepName = ApplicationEmployeeWizardComponent._addInfoStepName;
    }
    else {
      stepName = ApplicationEmployeeWizardComponent._summaryStepName;
    }

    this.router.navigate([], { queryParams: { step: stepName } });
  }
}
