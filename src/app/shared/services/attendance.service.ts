import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAttendance } from 'src/app/modules/iattendance';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private  _HttpClient:HttpClient) { }

  url = "http://localhost:5234/api/Attendances"


  // http://localhost:5234/api/Attendances?From=1&Year=2024&PageSize=10&PageIndex=1

  // getAllAttendance(pageIndex: number, pageSize: number, startMonth:number, year:number, endMonth:number):Observable<any>{
  //   return this._HttpClient.get(`${this.url}?From=${startMonth}&Year=${year}&PageSize=${pageSize}&PageIndex=${pageIndex}` ) 
  // }

  getAllAttendance(pageIndex: number, pageSize: number):Observable<any>{
    return this._HttpClient.get(`${this.url}?From=1&Year=2024&PageSize=${pageSize}&PageIndex=${pageIndex}` ) 
  }


  getAttendanceByNameAndDate(searchvalue:string, pageSize: number,pageIndex: number, startMonth: string, Year: string):Observable<any>{
    return this._HttpClient.get(`${this.url}?Search=${searchvalue}&PageSize=${pageSize}&PageIndex=${pageIndex}&StartMonth=${startMonth}&Year=${Year}`)
  }

 editAttendance(EmployeeName:string, dateOfTheDay:string,data:IAttendance):Observable<any>{
  return this._HttpClient.put(`${this.url}/Edit/${EmployeeName}/${dateOfTheDay}`, data)
 }
  
  
  deleteAttendance(EmployeeName: string, date: string) {
    return this._HttpClient.delete(`/api/Attendances/delete/${EmployeeName}/${date}`);
  
  }
  
  addAttendance( data:IAttendance):Observable<any>{
    return this._HttpClient.post(this.url ,data)
  }

  
  
  // addAttendance( data:IAttendance):Observable<any>{
  //   return this._HttpClient.post(this.url ,data)
  // }

  

}
