import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationDataService } from 'src/app/services/application-data.service';
import { ApplicationWizardComponent } from '../application-wizard/application-wizard.component';

@Component({
  selector: 'app-application-employee-wizard',
  templateUrl: './application-employee-wizard.component.html',
  styleUrls: ['./application-employee-wizard.component.scss'],
  providers: [ApplicationDataService]
})
export class ApplicationEmployeeWizardComponent extends ApplicationWizardComponent implements OnInit {
  constructor(router: Router, routes: ActivatedRoute) {
    super(router, routes);
  }

  submit(): void {
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
