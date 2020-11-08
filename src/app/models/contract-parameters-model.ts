import { BaseModel } from 'src/app/common-services/models/base-model';
import { ProductInfo } from '../products/product-info';
import { CalculationParameters } from '../services/calculation-parameters';

export class ContractParametersModel extends BaseModel implements CalculationParameters {
    constructor(public readonly product: ProductInfo) {
        super();
    }
}
