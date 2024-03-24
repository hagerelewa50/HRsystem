import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from 'src/app/modules/idepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private  _HttpClient:HttpClient) { }

  url = "http://localhost:5234/api/Departments"


  getAllDepartment():Observable<any>{
    return this._HttpClient.get(this.url) 
  }

  getDepartmentbysearchname(searchdeptvalue:string):Observable<any>
{
  return this._HttpClient.get(`${this.url}?Search=${searchdeptvalue}`)
}
  addDepartment( workdays:number, data:IDepartment):Observable<any>{
    return this._HttpClient.post(`${this.url}/WorkDays?workDays=${workdays}` ,data)
  }
  getdepartmentbyname(departname:string):Observable<any>{
    return this._HttpClient.get(`${this.url}/${departname}`)
  }

  editDepartment(departname:string,data:IDepartment):Observable<any>{
    return this._HttpClient.put(`${this.url}/Edit/${departname}`, data)
  }

  deleteDepartment (name:string):Observable<any>{
    return this._HttpClient.delete(`${this.url}/delete/${name}`)
  }
}
