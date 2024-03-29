import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import {ToastrService} from 'ngx-toastr'
import { ActivatedRoute, Router } from '@angular/router';
import { dateOfBirthHiringDateValidator } from '../custom/cstomvalidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  ErrMsgNatinalidExist:string = ""
  nationalid:string =""
  isEditing:boolean=false
  addMsgSuccess:string|undefined = "Employee added successfully"

  constructor(private _EmployeeService:EmployeeService , public toastr:ToastrService ,  private router: Router,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.nationalid=this._ActivatedRoute.snapshot.queryParams["ID"]
    console.log(this.nationalid);

    if (this.nationalid) {
      this._EmployeeService.getEmployeeById(this.nationalid).subscribe({
        next: (employeeData: any) => {
          this.addemployees.patchValue({
            employeeName: employeeData.employeeName,
            department: employeeData.department,
            nationalID: employeeData.nationalID,
            dateOfBirth:this.formatDate(employeeData.dateOfBirth),
            nationality:employeeData.nationality ,
            address: employeeData.address,
            gender: employeeData.gender,
            phone: employeeData.phone,
            vacationsCredit:employeeData.vacationsCredit,
            salary: employeeData.salary,
            hiringDate:this.formatDate( employeeData.hiringDate)
            
          });
          this.isEditing = true; 
        },
        error: (err:any) => {
          console.error('Error fetching employee data:', err);
        }
      });
    }
    
  }

  addemployees:FormGroup = new FormGroup({
    employeeName:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    department:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]),
    address:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]),
    nationality:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    nationalID:new FormControl(null,[Validators.required  ,  Validators.pattern(/^[0-9]{14}$/)]),
    dateOfBirth:new FormControl(null,[Validators.required ]),
    hiringDate:new FormControl(null,[Validators.required ]),
    salary:new FormControl(null,[Validators.required ]),
    vacationsCredit:new FormControl(null,[Validators.required ]),
    gender:new FormControl(null,[Validators.required ]),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{ validators: dateOfBirthHiringDateValidator() })


   formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  }

  showSuccess(body:string , title:string){   
    this.toastr.success( body ,title, {
   timeOut: 3000,
 });
   }

  // submit(){
  //   const employeesvalue = {
  //     ...this.addemployees.value,
  //     dateOfBirth: this.formatDate(this.addemployees.value.dateOfBirth),
  //     hiringDate: this.formatDate(this.addemployees.value.hiringDate)
  //   };


  //   if (this.isEditing) {
  //     // Edit existing employee
  //     this._EmployeeService.editEmployee(this.nationalid, employeesvalue).subscribe({
  //       next: (response: any) => {
  //         console.log(response);
          
  //         if (response.message === "Updated Successfully") {
  //           this.showSuccess(response.message , this.addemployees.value.employeeName);
  //         }
  //       },
  //       error: (err: any) => {
  //         console.error('Error editing employee:', err);
  //       }
  //     });
  //   }   else{

      

  //   this._EmployeeService.addemlpoyee(employeesvalue).subscribe({
  //     next: (response: HttpErrorResponse)=> {

        
  //       if(response.message === "New Employee has been created"){
  //         this.showSuccess("added successfully",this.addemployees.value.employeeName)
  //       }
  //       console.log(response);
        
        
        
  //     },
  //     error:(err:HttpErrorResponse)=> {

  //       this.ErrMsgNatinalidExist = err.error.message

  //       console.log(err);
        
  //     },
  //   })
  // }

   
    
  // }

  submit() {
   
    if (this.addemployees.valid) {
  
      const employeeData = {
        ...this.addemployees.value,
        dateOfBirth: this.formatDate(this.addemployees.value.dateOfBirth),
        hiringDate: this.formatDate(this.addemployees.value.hiringDate)
      };
  
      if (this.isEditing) {
    
        this._EmployeeService.editEmployee(this.nationalid, employeeData).subscribe({
          next: (response: any) => {
            if (response.message === "Updated Successfully") {
              this.showSuccess(response.message, this.addemployees.value.employeeName);
            }
          },
          error: (err: any) => {
            console.log( err);
          }
        });
      } else {
       
        this._EmployeeService.addemlpoyee(employeeData).subscribe({
          next: (response: HttpErrorResponse) => {
            if (response.message === "New Employee has been created") {
              this.showSuccess("Added successfully", this.addemployees.value.employeeName);
            }
          },
          error: (err: HttpErrorResponse) => {
            this.ErrMsgNatinalidExist = err.error.message;
            console.log( err);
          }
        });
      }
    } else {
    
      this.addemployees.markAllAsTouched();
    }
  }
  

}
