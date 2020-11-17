import { Component, OnInit } from '@angular/core';
import { CitizenInsuranceProduct } from 'src/app/products/citizen-insurance-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-citizen-application-page',
  templateUrl: './citizen-application-page.component.html',
  styleUrls: ['./citizen-application-page.component.scss']
})
export class CitizenApplicationPageComponent implements OnInit {
  public readonly productCode = CitizenInsuranceProduct.productCode;

  ngOnInit(): void {
  }
}
