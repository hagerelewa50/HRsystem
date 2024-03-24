import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IHolidays } from 'src/app/modules/iholidays';


@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private  _HttpClient:HttpClient) { }

  url = "http://localhost:5234/api/Holidays"
  
  getAllHoliday():Observable<any>{
    return this._HttpClient.get(this.url) 
  }
  addHoliday( holidayDate:string, data:IHolidays):Observable<any>{
    return this._HttpClient.post(`${this.url}/HolidayDate?holidayDate=${holidayDate}` ,data)
  }
  getHolidayByDate(holidayDate:string):Observable<any>{
    return this._HttpClient.get(`${this.url}/${holidayDate}`)
  }

  editHoliday(holidayDate:string,data:IHolidays):Observable<any>{
    return this._HttpClient.put(`${this.url}/Edit/${holidayDate}`, data)
  }

  deleteHoliday (date:string):Observable<any>{
    return this._HttpClient.delete(`${this.url}/delete/${date}`)
  }

}
