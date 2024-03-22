import { AbstractControl, ValidatorFn } from '@angular/forms';


export function validateComingTime():ValidatorFn  {
    return (control: AbstractControl):{ [key: string]: any } | null =>{
        const comingTime = control.get('comingTime')?.value;
        const timeToLeave = control.get('timeToLeave')?.value;
    
        if (comingTime && timeToLeave) {
          const comingTimeHours = parseInt(comingTime.split(':')[0]);
          const timeToLeaveHours = parseInt(timeToLeave.split(':')[0]);
          const comingTimeMinutes = parseInt(comingTime.split(':')[1]);
          const timeToLeaveMinutes = parseInt(timeToLeave.split(':')[1]);
    
          const comingTimeInMinutes = comingTimeHours * 60 + comingTimeMinutes;
          const timeToLeaveInMinutes = timeToLeaveHours * 60 + timeToLeaveMinutes;
    
          const timeDifferenceInMinutes = Math.abs(timeToLeaveInMinutes - comingTimeInMinutes);
    
          if (timeDifferenceInMinutes < 360) { 
            return { invalidTimeDifference: true };
    }
  }
  return null;}
}