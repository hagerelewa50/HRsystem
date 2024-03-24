import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';;
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/modules/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  searchvalue:string ='';

  department:IDepartment[] =[] ;
  constructor(private _Router:Router , private _DepartmentService:DepartmentService,public toastr:ToastrService){}

  ngOnInit(): void {
   this.getallDepartment()
  
   
    
  }
  GoToaddDepart(){
    this._Router.navigate(["/addDepart"])
  }


  getallDepartment(){
    console.log("hhh");
    if (this.searchvalue.trim() !== ""){
     
      
      this._DepartmentService.getDepartmentbysearchname(this.searchvalue).subscribe({
        next:(Response:IDepartment[])=>{
         this.department= Response
         console.log(Response);
        },
        error:(err:HttpErrorResponse) =>{
          console.log(err);
        }
      })

    }else{
      this._DepartmentService.getAllDepartment().subscribe({
        next:(Response:IDepartment[])=>{
         this.department= Response
         console.log(Response);
        },
        error:(err:HttpErrorResponse) =>{
          console.log(err);
        }
      })

    }
   
  }

  editDepartment(departmentname:string){
    this._Router.navigate(["/editDepart"],{queryParams: {ID:departmentname}})
  }


  deletdepartment(name:string){
    this._DepartmentService.deleteDepartment(name).subscribe(()=>{

      this.toastr.error( "deleted" ,name, {
        timeOut: 3000,
      })  
      
      this.getallDepartment()
    })
   
  }


    
 

}
