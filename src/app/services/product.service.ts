import { Injectable } from '@angular/core';
import { Money } from 'src/app/common-services/types/money';
import { CitizenCalculationParameters } from './citizen-calculation-parameters';
import { EmployeeCalculationParameters } from './employee-calculation-parameters';
import { CitizenInsuranceProduct } from './../products/citizen-insurance-product';
import { EmployeeInsuranceProduct } from './../products/employee-insurance-product';
import { Product } from '../products/product';
import { CalculationParameters } from './calculation-parameters';
import { InstalmentFrequencyModel } from '../bu-services/models/enumerations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public GetProduct<T extends Product>(c: new (...args: any[]) => T): T {// TODO - wire to product catalog
    const productName: string = c.name;

    if (productName === CitizenInsuranceProduct.name) {
      return new c('Pojištění odpovědnosti vyplývající z činností v běžném občanském životě', 0.2);
    } else if (productName === EmployeeInsuranceProduct.name) {
      return new c('Pojištění odpovědnosti zaměstnance za škodu způsobenou zaměstnavateli', 0.2, new Money(50000, 'CZK'), true);
    }

    return null;
  }

  public calculateYearlyInsurance<T extends CalculationParameters>(data: T): Money {
    if (data.doApply) {
      if (data.product instanceof CitizenInsuranceProduct) {
        const citizenData = data as unknown as CitizenCalculationParameters;

        if (citizenData.aggregateIndemnity && citizenData.territorialScale && citizenData.discount && citizenData.coinsurance) {
          let result: Money = citizenData.aggregateIndemnity.value.value;
          result = Money.divide(result, citizenData.territorialScale.code === 'europe' ? 10 : 20);
          result = Money.multiply(result, citizenData.discount);
          result = Money.minus(result, citizenData.coinsurance.value.value);
          return result;
        }
      }
      else if (data.product instanceof EmployeeInsuranceProduct) {
        const employeeData = data as unknown as EmployeeCalculationParameters;

        if (employeeData.aggregateIndemnity && employeeData.territorialScale) {
          let result: Money = employeeData.aggregateIndemnity.value.value;
          result = Money.divide(result, employeeData.territorialScale.code === 'europe' ? 10 : 20);
          result = Money.multiply(result, employeeData.discount);
          return result;
        }
      }
    }

    return null;
  }

  public calculateTotalYearlyInsurance(partialTotals: Money[]): Money {
    return Money.sum(partialTotals); // TODO - improve based on product
  }

  public calculateInstalment(yearlyInsurance: Money, frequency: InstalmentFrequencyModel): Money {
    return Money.divide(yearlyInsurance, frequency.paymentsPerYear);
  }
}
