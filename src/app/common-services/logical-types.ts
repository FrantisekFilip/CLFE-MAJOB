import { Validators } from '@angular/forms';

export interface Enumeration {
    code: string;
    viewValue: string;
}

export const ShortTextValidators = [Validators.maxLength(30)];
export const TextValidators = [Validators.maxLength(255)];
