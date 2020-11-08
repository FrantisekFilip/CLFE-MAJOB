import { CitizenInsuranceProduct } from './citizen-insurance-product';

describe('CitizenInsuranceProduct', () => {
  it('should create an instance', () => {
    expect(new CitizenInsuranceProduct(0.1)).toBeTruthy();
  });
});
