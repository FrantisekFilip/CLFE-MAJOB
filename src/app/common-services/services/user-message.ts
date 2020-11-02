import { LocalizedString } from '@angular/compiler/src/output/output_ast';
import { UndefinedParameterError } from '../errorHandling/undefined-parameter-error';

import { LocalizedMessage } from '../services/localized-message';
import { nameof, nameOf } from '../utils';

export class UserMessage implements LocalizedMessage {
    public readonly code: string;

    public readonly params: string[];

    constructor(code: string, params?: string[]) {
        if (!code) {
            throw new UndefinedParameterError(nameof(code));
        }

        this.code = code;
        this.params = params;
    }
}
