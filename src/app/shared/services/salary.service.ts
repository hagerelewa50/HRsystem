import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private  _HttpClient:HttpClient) { }
 url="http://localhost:5234/api/Salaries"

  getSalary( month:number, year:number,  pageSize: number, pageIndex: number):Observable<any>{
    return this._HttpClient.get(`${this.url}?StartMonth=${month}&Year=${year}&PageSize=${pageSize}&PageIndex=${pageIndex}`)
  }

  getsalarybyname(month:number, year:number,name:string ,  pageSize: number, pageIndex: number):Observable<any>{
    return this._HttpClient.get(`${this.url}?StartMonth=${month}&Year=${year}&Search=${name}&PageSize=${pageSize}&PageIndex=${pageIndex}`)
  }

  attendsempwithsalary(id:string,month:number, year:number):Observable<any>{
    return  this._HttpClient.get(`${this.url}/Attend?NationalId=${id}&StartMonth=${month}&Year=${year}`)
  }

  latesempwithsalary(id:string,month:number, year:number):Observable<any>{
    return  this._HttpClient.get(`${this.url}/late?NationalId=${id}&StartMonth=${month}&Year=${year}`)
  }
}
