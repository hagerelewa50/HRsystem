import { Component, OnInit} from '@angular/core';
import { IAttendance } from './../../modules/iattendance';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AttendanceService } from 'src/app/shared/services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendance:IAttendance[]=[];
  pageIndex: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;
  searchTerm: string = ''; 
  startMonth:string='';
  endMonth:string='';
  year:string='';
  
  
  constructor(private _Router:Router,private _AttendanceService:AttendanceService,public toastr:ToastrService){}
 
  ngOnInit(): void { 
    this.getAllAttendance()
  }

  GoToAddAttendance(){
    this._Router.navigate(["/addAttendance"])
  }

  // editAttendance(EmployeeName:string,Date:string){

  //   this._Router.navigate(["/editAttendance"],{queryParams: {EmployeeName:EmployeeName},{Date:Date}})

  // }


  

  searchAttendance(): void {
    this.pageIndex = 1; 
    this.getAllAttendance();
  }

  editAttendance(EmployeeName:string, dateOfTheDay:string){
    this._Router.navigate(["/editAttendance"],{queryParams: {name:EmployeeName,date:this.formatDate(dateOfTheDay)}})
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('/');
    return `${year}-${month}-${day}`;
  }

  

  deleteAttendance(EmployeeName: string, date: string) {
    this._AttendanceService.deleteAttendance(EmployeeName, date).subscribe(
      () => {
        this.toastr.error(`Attendance deleted: ${EmployeeName}`, '', {
          timeOut: 3000,
        });
        this.getAllAttendance();
      },
      (error: any) => {
        console.error('Error deleting attendance:', error);
      }
    );
  }





  // getAllAttendance(){

  //   // if(this.searchTerm.trim() !== ""){
  //   //    this._AttendanceService.getAttendanceByNameAndDate(this.searchTerm, this.pageSize,this.pageIndex, this.startMonth, this.endMonth, this.startYear).subscribe({
  //   // next:(response) =>{
  //   //      this.attendance = response.data
  //   //      this.totalItems = response.count
  //   //       console.log(this.totalItems);
  //   //       console.log(response);
          
  //   //     },
  //   //     error:(err) =>{
  //   //       console.log(err);
      
  //   //     },
  //   //   })
      

  //   // } else{

  //     this._AttendanceService.getAllAttendance(this.pageIndex, this.pageSize).subscribe({
  //       next:(response) =>{
  //        this.attendance = response.data
  //        this.totalItems = response.count
  //         console.log(this.totalItems);
  //         console.log(response);
          
          
  //       },
  //       error:(err) =>{
  //         console.log(err);
      
  //       },
  //     })
  //   }



  // }
  


  getAllAttendance() {
    if (this.searchTerm.trim() !== "") {
      this._AttendanceService.getAttendanceByNameAndDate(this.searchTerm, this.pageSize, this.pageIndex, this.startMonth, this.year).subscribe({
        next: (response) => {
          this.attendance = response.data;
          this.totalItems = response.count;
          console.log(this.totalItems);
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this._AttendanceService.getAllAttendance(this.pageIndex, this.pageSize).subscribe({
        next: (response) => {
          this.attendance = response.data;
          this.totalItems = response.count;
          console.log(this.totalItems);
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  
  
 


  
  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex + 1; 
    this.pageSize = event.pageSize;
    this.getAllAttendance();
  }

}
