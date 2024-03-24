import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAttendance } from 'src/app/modules/iattendance';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private  _HttpClient:HttpClient) { }

  url = "http://localhost:5234/api/Attendance"


  getAllAttendance(pageIndex: number, pageSize: number):Observable<any>{
    return this._HttpClient.get(`${this.url}?PageSize=${pageSize}&PageIndex=${pageIndex}` ) 
  }

  getAttendanceByNameAndDate(searchvalue:string, pageSize: number,pageIndex: number, startMonth: string, startYear: string, endMonth: string):Observable<any>{
    return this._HttpClient.get(`${this.url}?Search=${searchvalue}&PageSize=${pageSize}&PageIndex=${pageIndex}&StartMonth=${startMonth}&Year=${startYear}&EndMonth=${endMonth}`)
  }

 
  // addAttendance( data:IAttendance):Observable<any>{
  //   return this._HttpClient.post(this.url ,data)
  // }

  // editAttendance(nationalId:string,data:IAttendance):Observable<any>{
  //   return this._HttpClient.put(`${this.url}/Edit/id?ID=${nationalId}`, data)
  // }

  // deleteAttendance (ID:string):Observable<any>{
  //   return this._HttpClient.delete(`${this.url}/delete/id?ID=${ID}`)
  // }
}
