import { Component, OnInit } from '@angular/core';
import { EmployeeInsuranceProduct } from 'src/app/products/employee-insurance-product';

@Component({
  selector: 'app-employee-application-page',
  templateUrl: './employee-application-page.component.html',
  styleUrls: ['./employee-application-page.component.scss']
})
export class EmployeeApplicationPageComponent implements OnInit {
  public readonly productName = EmployeeInsuranceProduct.productCode;

  constructor() { }

  ngOnInit(): void {
  }
}
