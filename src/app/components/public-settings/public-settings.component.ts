import { Component, OnInit } from '@angular/core';
import { ISalary } from 'src/app/modules/isalary';
import { SalaryService } from 'src/app/shared/services/salary.service';

@Component({
  selector: 'app-public-settings',
  templateUrl: './public-settings.component.html',
  styleUrls: ['./public-settings.component.css']
})
export class PublicSettingsComponent implements OnInit {
  salaryofemployee:ISalary[] =[];
constructor(private _SalaryService:SalaryService){}

ngOnInit(): void {
 this.getallsalary()
}


getallsalary(){
  this._SalaryService.getSalary().subscribe({
    next:(response) =>{
      this.salaryofemployee = response
      console.log(this.salaryofemployee);
    },
    error:(err) =>{
      console.log(err);
    },
  })
}

}
