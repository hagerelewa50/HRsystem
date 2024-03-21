import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  workDays:number = 7;
  ErrMsg:string =""

  constructor(private _DepartmentService:DepartmentService, public toastr:ToastrService) { }

  ngOnInit(): void {
console.log(this.workDays); 
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
  })

  showSuccess(body:string , title:string){   
    this.toastr.success( body ,title, {
   timeOut: 3000,
 });
   }

  onSubmit() {
    this.addDepartment.value.comingTime+=':00'
    this.addDepartment.value.timeToLeave+=':00'
    console.log(this.addDepartment.value); 
    this._DepartmentService.addDepartment(this.workDays,this.addDepartment.value).subscribe({
      next:(response)=> {
        if(response.message === "New Department has been created"){
          this.showSuccess("added successfully",this.addDepartment.value.departmentName)
        }
        console.log(response);
        
      },error:(err)=> {
        this.ErrMsg =err.error.message
        
        console.log(err);
        
        
      },
    })

    
  }

}
