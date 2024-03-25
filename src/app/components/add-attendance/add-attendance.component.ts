import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from 'src/app/shared/services/attendance.service';
import {ToastrService} from 'ngx-toastr'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent {
  attendanceData:string = ""
  isEditing:boolean=false
  addMsgSuccess:string|undefined = "Attendance added successfully"
  ErrMsg:string =""
  
  constructor(private _AttendanceService:AttendanceService , public toastr:ToastrService ,  private router: Router,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.attendanceData=this._ActivatedRoute.snapshot.queryParams["ID"]
    console.log(this.attendanceData);

  if (this.attendanceData) {
      this._AttendanceService.getAttendanceByNameAndDate(this.attendanceData).subscribe({
        next: (attendanceData: any) => {
          this.addAttendance.patchValue({
            DepartmentName: attendanceData.DepartmentName,
            EmployeeName: attendanceData.employeeName,
            comingTime: attendanceData.comingTime,
            leaveTime:attendanceData.leaveTime,
            dateOfTheDay: this.formatDate(attendanceData.dateOfTheDay),
            bonusForTheDay: attendanceData.bonusForTheDay,
            discountOfLatency : attendanceData.discountOfLatency

          });
          this.isEditing = true; 
        }, error: (err:any) => {
          console.error('Error fetching attendance data:', err);
        }
      });
    }
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('/');
    return `${day}-${month}-${year}`;
  }

  addHoliday:FormGroup = new FormGroup({
    departmentName:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]),
    employeeName:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    comingTime: new FormControl(null,[Validators.required ]),
    leaveTime:new FormControl(null,[Validators.required ]),
    dateOfTheDay: new FormControl(null,[Validators.required ]),
    bonusForTheDay: new FormControl(null,[Validators.required ]),
    discountOfLatency : new FormControl(null,[Validators.required ]),

    
  })


}
