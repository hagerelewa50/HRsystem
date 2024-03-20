import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/modules/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  constructor(private  _HttpClient:HttpClient) { }

  url = "http://localhost:5234/api/Employees"


  getAllEmployee():Observable<any>{
    return this._HttpClient.get("") 
  }

  getEmployeeById(nationalId:string):Observable<any>{
    return this._HttpClient.get(`${this.url}/${nationalId}`)
    
  }
  addemlpoyee( data:IEmployee):Observable<any>{
    return this._HttpClient.post(this.url ,data)
  }

  editEmployee(nationalId:string,data:IEmployee):Observable<any>{
    return this._HttpClient.put(`${this.url}/Edit/id?ID=${nationalId}`, data)
  }

  deleteemployee (ID:string):Observable<any>{
    return this._HttpClient.delete(`${this.url}/delete/id?ID=${ID}`)
  }


}
