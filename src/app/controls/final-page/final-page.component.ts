import { Component, Input, OnInit } from '@angular/core';
import { ApplicationModel } from 'src/app/models/application-model';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {
  private readonly _model: ApplicationModel;

  @Input()
  public title: string;

  public get proposal(): boolean {
    return (this._model.documents?.proposal) ?? false;
  }

  public get confirmation(): boolean {
    return (this._model.documents?.confirmation) ?? false;
  }

  public get termsAndConditions(): boolean {
    return (this._model.agreements?.termsAndConditions) ?? false;
  }

  public get productInfo(): boolean {
    return (this._model.agreements?.productInfo) ?? false;
  }

  public get gdpr(): boolean {
    return (this._model.agreements?.gdpr) ?? false;
  }

  public get contractualInfo(): boolean {
    return (this._model.agreements?.contractualInfo) ?? false;
  }

  constructor(dataService: ApplicationDataService) {
    this._model = dataService.application;
  }

  ngOnInit(): void {
  }

  public paymentSucceeded(): boolean {
    return true; // TODO - remove after payments are implemented
    // return this.payment?.result?.success;
  }
}
