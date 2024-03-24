import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IHolidays } from 'src/app/modules/iholidays';
import { HolidaysService } from 'src/app/shared/services/holidays.service';



@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  
  holiday:IHolidays[]=[];
  constructor(private _Router:Router , private _HolidaysService:HolidaysService,public toastr:ToastrService){}
 
  ngOnInit(): void {
    this.getAllHoliday()
     
   }
   GoToAddHoliday(){
     this._Router.navigate(["/addHoliday"])
   }
   getAllHoliday(){
    this._HolidaysService.getAllHoliday().subscribe({
      next:(Response:IHolidays[])=>{
       this.holiday= Response
       console.log(Response);
       
        
      },
      error:(err:HttpErrorResponse) =>{
        console.log(err);

      }
    })
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  }

  editHoliday(holidayDate:string){
    this._Router.navigate(["/editHoliday"],{queryParams: {ID:holidayDate}})
  }


  deleteHoliday(holidayDate:string){
    this._HolidaysService.deleteHoliday(holidayDate).subscribe(()=>{

      this.toastr.error( "deleted" ,holidayDate, {
        timeOut: 3000,
      })  
      
      this.getAllHoliday()
    })
   
  }




   //--------------------------------------


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // newHoliday: { name: string, date: string } = { name: '', date: '' };

  // constructor() { }

  // onSubmit() {
  //   if (this.newHoliday.name && this.newHoliday.date) {
  //     this.holidays.push({ ...this.newHoliday });
  //     this.newHoliday = { name: '', date: '' };
  //   }
  // }

  // holidays: { name: string, date: string}[] = [
  //   { name: 'New Year', date: '2024-01-01'},
  //   { name: 'Christmas', date: '2024-12-25' },
  //   { name: 'Thanksgiving', date: '2024-11-28'}
  // ];

  // editedHoliday: { name: string, date: string}  | null = null;

  

  // editHoliday(holiday: { name: string, date: string }) {
  //   // Set the holiday to be edited
  //   this.editedHoliday = { ...holiday };
  // }

  // // saveHoliday() {
  // //   // Find the index of the edited holiday
  // //   //const index = this.holidays.findIndex(holiday => holiday === this.editedHoliday);

  // //   if (this.editedHoliday) {
  // //     // Find the index of the edited holiday
  // //     const index = this.holidays.findIndex(holiday => holiday === this.editedHoliday);
  
  // //   if (index > -1) {
  // //     // Update the holiday in the array
  // //     this.holidays[index] = {
  // //       name: this.editedHoliday.name || '',
  // //       date: this.editedHoliday.date || ''
  // //     };
  // //     this.editedHoliday = null; // Clear the edited holiday
  // //   }
  // // }
  // // }
  // saveHoliday() {
  //   if (this.editedHoliday) {
  //     const index = this.holidays.findIndex(holiday =>
  //       holiday.name === this.editedHoliday!.name && holiday.date === this.editedHoliday!.date
  //     );
  
  //     if (index > -1) {
  //       this.holidays[index] = { ...this.editedHoliday };
  //       this.editedHoliday = null;
  //     }
  //   }
  // }
  // cancelEdit() {
  //   // Clear the edited holiday
  //   this.editedHoliday = null;
  // }

  // deleteHoliday(holiday: { name: string, date: string}) {
  //   const index = this.holidays.indexOf(holiday);
  //   if (index > -1) {
  //     this.holidays.splice(index, 1);
  //     if (this.editedHoliday === holiday) {
  //       // Clear the edited holiday if it is being deleted
  //       this.editedHoliday = null;
  //     }
  //   }
  // }
  
}


