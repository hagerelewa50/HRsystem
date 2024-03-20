import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(private _Router:Router,private _EmployeeService:EmployeeService){}
  GoToEmloyee(){
    this._Router.navigate(["/addemloyee"])
  }

  editEmployee(nationalId:string){

    this._Router.navigate(["/editemloyee"],{queryParams: {ID:nationalId}})

  }

 

  deletedemployee(Id:string){
    console.log("hello");
    
    this._EmployeeService.deleteemployee(Id).subscribe(()=>{
      this._EmployeeService.getAllEmployee()
    })

  }

}
