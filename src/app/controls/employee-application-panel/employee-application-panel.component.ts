import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { ApplicationModel } from 'src/app/models/application-model';
import { CitizenInsuranceParametersModel } from 'src/app/models/citizen-insurance-parameters-model';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ProductService } from 'src/app/products/services/product.service';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-employee-application-panel',
  templateUrl: './employee-application-panel.component.html',
  styleUrls: ['./employee-application-panel.component.scss']
})
export class EmployeeApplicationPanelComponent extends FormPanelDirective implements OnInit {
  private readonly _citizenProduct: CitizenInsuranceProduct;
  private _model: ApplicationModel;

  public get citizenInsuranceProductName(): string {
    return this._citizenProduct.name;
  }

  public readonly employeeInsuranceProductName: string;

  public get isCitizenActive(): boolean {
    return (this._model.citizenInsuranceParameters?.doApply) ?? false;
  }

  constructor(dataService: ApplicationDataService, productService: ProductService) {
    super();
    this._model = dataService.application;
    this._citizenProduct = productService.GetProduct(CitizenInsuranceProduct);
    this.employeeInsuranceProductName = productService.GetProduct(EmployeeInsuranceProduct).name;
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'EmployeeApplicationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public addOrRemoveCitizenSection = (): void => {
    const model = this._model.citizenInsuranceParameters;

    if (model) {
      model.doApply = !model.doApply;
    }
    else {
      this._model.citizenInsuranceParameters = new CitizenInsuranceParametersModel(this._citizenProduct);
    }
  }
}
