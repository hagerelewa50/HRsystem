import { Component } from '@angular/core';import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ErrMsg:string="";
  isloading:boolean = false;


  constructor(private _AuthserviceService:AuthserviceService , private _Router:Router){}

  loginform:FormGroup = new FormGroup({

    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),

  })

  handleSubmit():void{

    console.log(this.loginform.value);
    console.log(this._AuthserviceService.setRegister(this.loginform.value));

    if(this.loginform.valid){
      this.isloading =true
      
      this._AuthserviceService.setLogin(this.loginform.value).subscribe({
        next: (response)=>{

          if(response.message == "succsess"){
            localStorage.setItem("etoken" , response.token)
            this._AuthserviceService.saveUserData()
            
            this.isloading =false
            this._Router.navigate(["/employees"])
          }
          console.log(response);
        },
        error:(err:HttpErrorResponse)=> {
      this.isloading =false
          this.ErrMsg = err.error.message
          console.log(err.error.message);
        },
      })

    }
    

  }

}
