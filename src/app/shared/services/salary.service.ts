import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private  _HttpClient:HttpClient) { }
 

  getSalary(pageSize: number, pageIndex: number):Observable<any>{
    return this._HttpClient.get(`http://localhost:5234/api/Salaries?StartMonth=1&Year=2024&PageSize=${pageSize}&PageIndex=${pageIndex}`)
  }
  
}
