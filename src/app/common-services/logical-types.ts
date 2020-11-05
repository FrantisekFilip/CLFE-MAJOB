import { Validators } from '@angular/forms';
import { UndefinedParameterError } from './errorHandling/undefined-parameter-error';
import { nameof } from './utils';

export const ShortTextValidators = [Validators.maxLength(30)];
export const TextValidators = [Validators.maxLength(255)];

export class Money {
    public readonly amount: number;

    public readonly currency: string;

    constructor(amount: number, currency: string) {
        if (!currency) {
            throw new UndefinedParameterError(nameof(currency));
        }

        this.amount = amount;
        this.currency = currency;
    }
}
