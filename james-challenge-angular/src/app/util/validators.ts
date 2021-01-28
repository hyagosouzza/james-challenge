import { AbstractControl, ValidatorFn } from '@angular/forms';

export function notBlankValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!control.value || !control.value.trim().length) {
            return { notBlank: true };
        }
    };
}
