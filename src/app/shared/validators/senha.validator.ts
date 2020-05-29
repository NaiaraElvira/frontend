import { AbstractControl } from "@angular/forms";

export function senhaValidator(control: AbstractControl){
    if (control.value.includes(' ')) {
        return { senhaValid: true };
    }
    return null;
}