/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
import * as ɵngcc0 from '@angular/core';
export declare const MAT_ERROR: InjectionToken<MatError>;
/** Single error message to be shown underneath the form field. */
export declare class MatError {
    id: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatError, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatError, "mat-error", never, { "id": "id"; }, {}, never>;
}

//# sourceMappingURL=error.d.ts.map