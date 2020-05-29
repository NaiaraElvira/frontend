import { AbstractControl } from "@angular/forms";

export function loginValidator(control: AbstractControl){
    if (!control.value.includes('_') && !control.value.includes('-')) {
        return { loginValid: true };
    }
    return null;
}