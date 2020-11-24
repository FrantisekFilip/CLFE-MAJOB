import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormPanelDirective } from 'src/app/common-controls/forms/form-panel.directive';
import { ApplicationModel } from 'src/app/models/application-model';
import { EmployeeInsuranceParametersModel } from 'src/app/models/employee-insurance-parameters-model';
import { CitizenInsuranceProduct } from 'src/app/products/services/citizen-insurance-product';
import { EmployeeInsuranceProduct } from 'src/app/products/services/employee-insurance-product';
import { ProductService } from 'src/app/products/services/product.service';
import { ApplicationDataService } from 'src/app/services/application-data.service';

@Component({
  selector: 'app-citizen-application-panel',
  templateUrl: './citizen-application-panel.component.html',
  styleUrls: ['./citizen-application-panel.component.scss']
})
export class CitizenApplicationPanelComponent extends FormPanelDirective implements OnInit {
  private readonly _employeeProduct: EmployeeInsuranceProduct;
  private _model: ApplicationModel;

  public readonly citizenInsuranceProductName: string;

  public get employeeInsuranceProductName(): string {
    return this._employeeProduct.name;
  }

  public get isEmployeeActive(): boolean {
    return (this._model.employeeInsuranceParameters?.doApply) ?? false;
  }

  constructor(dataService: ApplicationDataService, productService: ProductService) {
    super();
    this.citizenInsuranceProductName = productService.GetProduct(CitizenInsuranceProduct).name;
    this._model = dataService.application;
    this._employeeProduct = productService.GetProduct(EmployeeInsuranceProduct);
  }

  protected OnConstruct(): { controlName: string, controls?: { [key: string]: AbstractControl; }[] } {
    return { controlName: 'CitizenApplicationPanel' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public addOrRemoveEmployeeSection = (): void => {
    const model = this._model.employeeInsuranceParameters;

    if (model) {
      model.doApply = !model.doApply;
    }
    else {
      this._model.employeeInsuranceParameters = new EmployeeInsuranceParametersModel(this._employeeProduct);
    }
  }
}
