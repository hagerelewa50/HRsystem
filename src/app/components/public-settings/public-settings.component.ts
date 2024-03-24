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
  pageIndex: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;
constructor(private _SalaryService:SalaryService){}

ngOnInit(): void {
 this.getallsalary()
}
onPageChange(event: any): void {
  this.pageIndex = event.pageIndex + 1; 
  this.pageSize = event.pageSize;
  this.getallsalary();
}

getallsalary(){
  this._SalaryService.getSalary(this.pageSize,this.pageIndex).subscribe({
    next:(response) =>{
      this.salaryofemployee = response.data
      this.totalItems = response.count
      
      console.log(response);
    },
    error:(err) =>{
      console.log(err);
    },
  })
}

}
