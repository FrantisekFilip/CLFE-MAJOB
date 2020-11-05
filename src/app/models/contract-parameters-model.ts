import { MonoTypeOperatorFunction } from 'rxjs';
import { BaseModel } from 'src/app/common-services/models/base-model';
import { TerritorialScaleModel } from '../bu-services/models/enumerations';
import { MoneyModel } from '../common-services/models/money-model';
import { AggregateIndemnityModel, CoinsuranceModel } from './enumerations';

export class ContractParametersModel extends BaseModel {
    public commencementDate: Date;

    public aggregateIndemnity: AggregateIndemnityModel;

    public territorialScale: TerritorialScaleModel;

    public coinsurance: CoinsuranceModel;

    public discount: number;

    public yearlyInsurance: MoneyModel;
}
