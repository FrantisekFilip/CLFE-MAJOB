import { AddressModel } from 'src/app/bu-services/models/address-model';
import { ClientInfoModel } from 'src/app/bu-services/models/client-info-model';
import { BaseModel } from 'src/app/common-services/models/base-model';
import { MoneyModel } from '../common-services/models/money-model';
import { AgreementsModel } from './agreements-model';
import { CitizenInsuranceParametersModel } from './citizen-insurance-parameters-model';
import { EmployeeInsuranceParametersModel } from './employee-insurance-parameters-model';
import { InstalmentsModel } from './instalments-model';

export class ApplicationModel extends BaseModel {
    public citizenInsuranceParameters: CitizenInsuranceParametersModel;

    public employeeInsuranceParameters: EmployeeInsuranceParametersModel;

    public commencementDate: Date;

    public policyHolder: ClientInfoModel;

    public mainAddress: AddressModel;

    public contactAddress: AddressModel;

    public insuredPerson: ClientInfoModel;

    public agreements: AgreementsModel;

    public agreementsAccepted: boolean;

    public contactMethodsAllowed: boolean;

    public instalments: InstalmentsModel;

    public totalYearlyInsurance: MoneyModel;
}
