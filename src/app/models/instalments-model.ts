import { InstalmentFrequencyModel } from '../bu-services/models/enumerations';
import { BaseModel } from '../common-services/models/base-model';
import { MoneyModel } from '../common-services/models/money-model';

export class InstalmentsModel extends BaseModel {
    public frequency: InstalmentFrequencyModel;

    public payment: MoneyModel;
}
