import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { validateComingTime } from '../custom/timecustomvalidation';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  departmentname:string = ""
  isEditing:boolean=false
  workDays:number = 7;
  ErrMsg:string =""

  constructor(private _DepartmentService:DepartmentService, public toastr:ToastrService ,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.departmentname=this._ActivatedRoute.snapshot.queryParams["ID"]
    console.log(this.departmentname);

    if (this.departmentname) {
      this._DepartmentService.getdepartmentbyname(this.departmentname).subscribe({
        next: (departmentData: any) => {
          this.addDepartment.patchValue({
            departmentName:departmentData.departmentName,
            workDays: departmentData.workDays,
            deductionRule: departmentData.deductionRule,
            bonusRule: departmentData.bonusRule,
            comingTime: departmentData.comingTime,
            timeToLeave: departmentData.timeToLeave,
            managerName: departmentData.managerName,
            isHourly: true
            
          });
          this.isEditing = true;
        },
        error: (ErrMsg:any) => {
          console.log( ErrMsg);
        }
      });
    }
  }




  test(){
    const officialHoliday1 = this.addDepartment.value.officialHoliday1;
    const officialHoliday2 = this.addDepartment.value.officialHoliday2;

    if (officialHoliday1==null && officialHoliday2 ==null ){
      this.workDays = 7
    } if (officialHoliday1==null || officialHoliday2 ==null) {
      this.workDays =6
    } else{
      this.workDays =5
    }
    if (officialHoliday1 === officialHoliday2) {
      this.addDepartment.patchValue({ officialHoliday2: null })
      this.workDays=6
  }
   console.log(this.workDays); 
  }
  

  addDepartment:FormGroup = new FormGroup({
    departmentName:new FormControl(null,[Validators.required , Validators.minLength(2) , Validators.maxLength(30)]),
    managerName:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    deductionRule:new FormControl(null,[Validators.required ]),
    bonusRule:new FormControl(null,[Validators.required ]),
    comingTime:new FormControl(null,[Validators.required ]),
    timeToLeave:new FormControl(null,[Validators.required ]),
    officialHoliday1:new FormControl(null,[Validators.required ]),
    officialHoliday2:new FormControl(null),
    isHourly:new FormControl(false),
    workDays:new FormControl(this.workDays,[Validators.required ]),
  },{ validators:validateComingTime()})

  showSuccess(body:string , title:string){   
    this.toastr.success( body ,title, {
   timeOut: 3000,
 });
   }

  onSubmit() {

    const departmentData ={...this.addDepartment.value}
    this.addDepartment.value.comingTime+=':00'
    this.addDepartment.value.timeToLeave+=':00'
    console.log(this.addDepartment.value); 

    if (this.isEditing) {
    
      this._DepartmentService.editDepartment(this.departmentname, departmentData).subscribe({
        next: (response: any) => {
          if (response.message === "Updated Successfully") {
            this.showSuccess(response.message, this.addDepartment.value.departmentName);
          }
        },
        error: (ErrMsg: any) => {
          console.log( ErrMsg);
        }
      });
    }

    this._DepartmentService.addDepartment(this.workDays,this.addDepartment.value).subscribe({
      next:(response)=> {
        if(response.message === "New Department has been created"){
          this.showSuccess("added successfully",this.addDepartment.value.departmentName)
        }
        console.log(response);
        
      },error:(err)=> {
        this.ErrMsg =err.error.message
        
        console.log(this.ErrMsg);
        
        
      },
    })

    
  }

}
