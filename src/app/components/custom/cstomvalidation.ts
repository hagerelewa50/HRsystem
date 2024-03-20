import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function to validate dateOfBirth and hiringDate
export function dateOfBirthHiringDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateOfBirthControl = control.get('dateOfBirth');
    const hiringDateControl = control.get('hiringDate');

    if (dateOfBirthControl && hiringDateControl) {
      const dateOfBirth = new Date(dateOfBirthControl.value);
      const hiringDate = new Date(hiringDateControl.value);

      // Calculate the difference in years between dateOfBirth and hiringDate
      const diffYears = hiringDate.getFullYear() - dateOfBirth.getFullYear();

      // Check if the difference is less than 20 years
      if (diffYears < 20) {
        // Return a validation error if the difference is less than 20 years
        return { dateOfBirthHiringDate: true };
      }
    }

    // Return null if validation passes
    return null;
  };
}
