import { StepperSelectionEvent } from '@angular/cdk/stepper/public-api';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-citizen-wizard',
  templateUrl: './application-citizen-wizard.component.html',
  styleUrls: ['./application-citizen-wizard.component.scss']
})
export class ApplicationCitizenWizardComponent implements OnInit {
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

      if (step === ApplicationCitizenWizardComponent._calcStepName) {
        this.selectedIndex = 0;
      }
      else if (step === ApplicationCitizenWizardComponent._addInfoStepName) {
        this.selectedIndex = 1;
      } else {
        this.selectedIndex = 2;
      }
    });
  }

  stepperChanged(event: StepperSelectionEvent): void {
    let stepName: string;

    if (event.selectedIndex === 0) {
      stepName = ApplicationCitizenWizardComponent._calcStepName;
    }
    else if (event.selectedIndex === 1) {
      stepName = ApplicationCitizenWizardComponent._addInfoStepName;
    }
    else {
      stepName = ApplicationCitizenWizardComponent._summaryStepName;
    }

    this.router.navigate([], { queryParams: { step: stepName } });
  }
}
