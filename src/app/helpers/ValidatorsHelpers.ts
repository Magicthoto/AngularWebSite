import { ValidationErrors, AbstractControl } from "@angular/forms";

export default class ValidatorsHelpers {
  static checkpassword(c: AbstractControl): ValidationErrors | null {
    if (c.value.length === 0)
      return {
        checkpassword: "Empty"
      };
    return null;
  }
}
