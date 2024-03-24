import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function to check if repassword matches password
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const rePassword = control.get('rePassword');

  if (password && rePassword && password.value !== rePassword.value) {
    return { passwordMismatch: true };
  }

  return null;
};