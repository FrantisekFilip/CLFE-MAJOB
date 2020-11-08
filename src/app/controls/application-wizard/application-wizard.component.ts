import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper/public-api';
import { ActivatedRoute, Router } from '@angular/router';
import { KnownRoutes } from 'src/app/known-routes';
import { StepNames } from './step-names';
import { CitizenInsuranceProduct } from 'src/app/products/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/employee-insurance-product';

@Component({
  selector: 'app-application-wizard',
  templateUrl: './application-wizard.component.html',
  styleUrls: ['./application-wizard.component.scss']
})
export class ApplicationWizardComponent implements OnInit {
  public readonly homeRoute = KnownRoutes.routeHome;
  public selectedIndex = 0;
  public calcForm: FormGroup;
  public addInfoForm: FormGroup;
  public summaryPage: FormGroup;

  @Input()
  public productName: string;

  constructor(private router: Router, private routes: ActivatedRoute) {
    this.calcForm = new FormGroup({});
    this.addInfoForm = new FormGroup({});
    this.summaryPage = new FormGroup({});
  }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(param => {
      const step = param[0];

      if (step === StepNames.addInfoStepName) {
        this.selectedIndex = 1;
      }
      else if (step === StepNames.summaryStepName) {
        this.selectedIndex = 2;
      } else {
        this.selectedIndex = 0;
      }
    });
  }

  submit(): void {
  }

  public isCitizenInsurance(): boolean {
    return this.productName === CitizenInsuranceProduct.productCode;
  }

  public isEmployeeInsurance(): boolean {
    return this.productName === EmployeeInsuranceProduct.productCode;
  }

  public stepperChanged(event: StepperSelectionEvent): void {
    let stepName: string;

    if (event.selectedIndex === 0) {
      stepName = StepNames.calcStepName;
    }
    else if (event.selectedIndex === 1) {
      stepName = StepNames.addInfoStepName;
    }
    else {
      stepName = StepNames.summaryStepName;
    }

    this.router.navigate([], { queryParams: { step: stepName } });
  }
}
