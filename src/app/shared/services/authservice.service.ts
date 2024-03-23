import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  userData:any;
  constructor(private _HttpClient:HttpClient , private _Router:Router) {}
  logOut(){
    localStorage.removeItem('etoken')
    this._Router.navigate(['/login'])

  }
  saveUserData(){
    if(localStorage.getItem("etoken")!=null){
      let encodeToken:any = localStorage.getItem("etoken")
      let   decodeToken =  jwtDecode(encodeToken)
      this.userData = decodeToken
      console.log(decodeToken);
      
    }
  }

  setRegister(userdata:object):Observable<any>{
    console.log(userdata);
   
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
  });

  return  this._HttpClient.post('http://localhost:5234/api/Accounts/register',userdata, { headers: httpHeaders })
  }


  setLogin(userdata:object):Observable<any>{
    console.log(userdata);
   
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
  });

  return  this._HttpClient.post('http://localhost:5234/api/Accounts/login',userdata, { headers: httpHeaders })
  }
}
