import { BaseModel } from './base-model';
import { Money } from '../logical-types';

export class MoneyModel extends BaseModel {
    public static readonly DefaultCurrency = 'CZK'; // TODO - from init
    private _value: Money = new Money(0, MoneyModel.DefaultCurrency);

    public get amount(): number {
        return this._value.amount;
    }

    public set amount(value: number) {
        if (this._value.amount !== value) {
            this._value = new Money(value, this._value.currency);
        }
    }

    public get currency(): string {
        return this._value.currency;
    }

    public set currency(value: string) {
        if (this._value.currency !== value) {
            this._value = new Money(this._value.amount, value);
        }
    }

    public setValue(amount: number, currency: string): void {
        this._value = new Money(amount, currency);
    }
}
