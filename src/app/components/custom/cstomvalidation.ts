import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateOfBirthHiringDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateOfBirthControl = control.get('dateOfBirth');
    const hiringDateControl = control.get('hiringDate');
   

    if (dateOfBirthControl && hiringDateControl) {
      const dateOfBirth = new Date(dateOfBirthControl.value);
      const hiringDate = new Date(hiringDateControl.value);
      const diffYears = hiringDate.getFullYear() - dateOfBirth.getFullYear();


      if (diffYears < 20) {
   
        return { dateOfBirthHiringDate: true };
      }
    }

    return null;
  };
}
