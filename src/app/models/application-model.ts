import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { BaseModel } from 'src/app/common-services/models/base-model';
import { AgreementsModel } from './agreements-model';
import { ContractParametersModel } from './contract-parameters-model';

export class ApplicationModel extends BaseModel {
    public contractParameters: ContractParametersModel;

    public policyHolder: ClientInfoModel;

    public mainAddress: AddressModel;

    public useContactAddress: boolean;

    public contactAddress: AddressModel;

    public useInsuredPerson: boolean;

    public insuredPerson: ClientInfoModel;

    public agreements: AgreementsModel;

    public agreementsAccepted: boolean;

    public contactMethodsAllowed: boolean;
}
