import { IEmployee } from './../../modules/iemployee';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee:IEmployee[]=[];
  pageIndex: number = 1;
  pageSize: number = 5;
  totalItems: number = 0;
  searchTerm: string = ''; 
  // paginatedEmployees: IEmployee[] = [];
  // pageIndex: number = 1;
  // pageSize: number = 10;
  // totalItems: number = 0;
  // totalPages: number = 0;
  constructor(private _Router:Router,private _EmployeeService:EmployeeService,public toastr:ToastrService){}

  ngOnInit(): void {
   
    this.getAllEmployee()
   
  }
  GoToEmloyee(){
    this._Router.navigate(["/addemloyee"])
  }

  editEmployee(nationalId:string){

    this._Router.navigate(["/editemloyee"],{queryParams: {ID:nationalId}})

  }
  searchEmployee(): void {
    this.pageIndex = 1; 
    this.getAllEmployee();
  }

  getAllEmployee(){

    if(this.searchTerm.trim() !== ""){
      this._EmployeeService.getemployeebysearchname(this.searchTerm, this.pageSize,this.pageIndex).subscribe({
        next:(response) =>{
         this.employee = response.data
         this.totalItems = response.count
          console.log(this.totalItems);
          console.log(response);
          
        },
        error:(err) =>{
          console.log(err);
      
        },
      })
      

    } else{

      this._EmployeeService.getAllEmployee(this.pageIndex, this.pageSize).subscribe({
        next:(response) =>{
         this.employee = response.data
         this.totalItems = response.count
          console.log(this.totalItems);
          console.log(response);
          
          
        },
        error:(err) =>{
          console.log(err);
      
        },
      })
    }

  }


  deletedemployee(Id:string ,name:string){
    console.log("hello");
    
    this._EmployeeService.deleteemployee(Id).subscribe(()=>{
      this.toastr.error( "deleted" ,name, {
        timeOut: 3000,
      }) 
      this.getAllEmployee()
    })

  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex + 1; 
    this.pageSize = event.pageSize;
    this.getAllEmployee();
  }

}
