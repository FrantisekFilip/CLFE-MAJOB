import { Enumeration } from '../common-services/logical-types';

export interface TerritorialScale extends Enumeration {
    value: string;
}

export interface AggregateIndemnity extends Enumeration {
    value: number;
}

export interface Coinsurance extends Enumeration {
    value: number;
}
