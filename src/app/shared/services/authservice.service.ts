import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private _HttpClient:HttpClient) {


    
   }

  setRegister(userdata:object):Observable<any>{
    console.log(userdata);
   
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
  });

  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata, { headers: httpHeaders })
  }


  setLogin(userdata:object):Observable<any>{
    console.log(userdata);
   
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
  });

  return  this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata, { headers: httpHeaders })
  }
}
