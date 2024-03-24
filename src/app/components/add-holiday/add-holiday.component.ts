import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HolidaysService } from 'src/app/shared/services/holidays.service';
import {ToastrService} from 'ngx-toastr'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit{

  holidayData:string = ""
  isEditing:boolean=false
  addMsgSuccess:string|undefined = "Holiday added successfully"
  ErrMsg:string =""


  constructor(private _HolidayService:HolidaysService , public toastr:ToastrService ,  private router: Router,private _ActivatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.holidayData=this._ActivatedRoute.snapshot.queryParams["ID"]
    console.log(this.holidayData);

  if (this.holidayData) {
      this._HolidayService.getHolidayByDate(this.holidayData).subscribe({
        next: (holidayData: any) => {
          this.addHoliday.patchValue({
            holidayName: holidayData.holidayName,
            holidayDate: this.formatDate(holidayData.holidayDate),
            // nationalID: employeeData.nationalID,
            // dateOfBirth:this.formatDate(employeeData.dateOfBirth),
            // nationality:employeeData.nationality ,
            // address: employeeData.address,
            // gender: employeeData.gender,
            // phone: employeeData.phone,
            // vacationsCredit:employeeData.vacationsCredit,
            // salary: employeeData.salary,
            // hiringDate:this.formatDate( employeeData.hiringDate)
            
          });
          this.isEditing = true; 
        }, error: (err:any) => {
          console.error(err);
        }
      });
    }
  }
  
  addHoliday:FormGroup = new FormGroup({
    holidayName:new FormControl(null,[Validators.required , Validators.minLength(2) , Validators.maxLength(30)]),
    dateOnTheCurrentYear:new FormControl(null,[Validators.required ]),
    
  })
  
  formatDate(date: string): string {
    const [year, month, day] = date.split('/');
    return `${day}-${month}-${year}`;
  }



  showSuccess(body:string , title:string){   
    this.toastr.success( body ,title, {
   timeOut: 3000,
 });
}

 add() {
   
  if (this.addHoliday.valid) {

    const holidayData = {
      ...this.addHoliday.value,
      dateOnTheCurrentYear: this.holidayData
    };
    
    if (this.isEditing) {
      console.log(holidayData,this.holidayData);
      
    
      this._HolidayService.editHoliday(this.holidayData, holidayData).subscribe({
        next: (response: any) => {
          if (response.message === "Updated Successfully") {
            this.showSuccess(response.message, this.addHoliday.value.holidayName);
          }
        },
        error: (err: any) => {
          console.log( err);
        }
      });
    }

    // this._HolidayService.addHoliday(this.holidayDate,this.addHoliday.value).subscribe({
    //   next:(response)=> {
    //     if(response.message === "New holiday has been created"){
    //       this.showSuccess("added successfully",this.addHoliday.value.holidayName)
    //     }
    //     console.log(response);
        
      },error:(err)=> {
        this.ErrMsg =err.error.message
        
        console.log(err);
        
        
      },
    })
  

    else {
       
      this._HolidayService.addHoliday(this.holidayDate,holidayData).subscribe({
        next: (response: HttpErrorResponse) => {
          if (response.message === "New Holiday has been created") {
            this.showSuccess("Added successfully", this.addHoliday.value.employeeName);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.ErrMsg = err.error.message;
          console.log( err);
        }
      });
    }
  } else {
  
  //   this.addHoliday.markAllAsTouched();
  // }
  // }
  }


