import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ErrMsg:string="";
  selectsearchname:string="";
  empname:string="";
  selectedMonth: number =1;
  enteredYear: number =2024;
constructor(private _SalaryService:SalaryService,private _Router:Router){}

ngOnInit(): void {
 this.getallsalary()
 console.log(new Date());

}

goToAttendempsalary(nationalId:string, empname:string){
  this._Router.navigate(["/attendempsalary"],{queryParams:{name:empname, ID:nationalId , month:this.selectedMonth , year:this.enteredYear}})

}

goToLateempsalary(nationalId:string, empname:string){
  this._Router.navigate(["/lateempsalary"],{queryParams:{name:empname, ID:nationalId , month:this.selectedMonth , year:this.enteredYear}})

}

onPageChange(event: any): void {
  this.pageIndex = event.pageIndex + 1; 
  this.pageSize = event.pageSize;
  this.getallsalary();
}

getallsalary(){
  this._SalaryService.getSalary( this.selectedMonth,this.enteredYear, this.pageSize,this.pageIndex).subscribe({
    next:(response) =>{
      this.ErrMsg=""
      this.salaryofemployee = response.data
      this.totalItems = response.count
      
      console.log(response);
    },
    error:(err) =>{
      this.ErrMsg = err.error.message
      console.log(err.error.message);
    },
  })
}

getsearchbyname(){
  this._SalaryService.getsalarybyname( this.selectedMonth,this.enteredYear,this.selectsearchname, this.pageSize,this.pageIndex).subscribe({
    next:(response) =>{
      this.ErrMsg=""
      this.salaryofemployee = response.data
      this.totalItems = response.count
      
      console.log(response);
    },
    error:(err) =>{
      console.log(err);
      
      this.ErrMsg = err.error.message
      console.log(err.error.message);
    },
  })

}
search() {
 if(this.selectsearchname !==null){
  this.getsearchbyname()

 }else{
  this.getallsalary()
 }
 

}

}
