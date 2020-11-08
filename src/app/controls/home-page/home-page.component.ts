import { Component, Input, OnInit, Output } from '@angular/core';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { KnownRoutes } from 'src/app/known-routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public readonly routeCitizenApp = KnownRoutes.routeCitizenWizard;
  public readonly routeEmployeeApp = KnownRoutes.routeEmployeeWizard;
  public applicationRoute: string;

  constructor() { }

  ngOnInit(): void {
  }
}
