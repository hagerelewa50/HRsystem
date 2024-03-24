import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';
import { passwordMatchValidator } from '../custom/passwordMatchValidator ';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ErrMsg:string="";
  isloading:boolean = false;
  constructor(private _AuthserviceService:AuthserviceService , private _Router:Router){}
  registerform:FormGroup = new FormGroup({
    fullName:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]),
    userName:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
  },{ validators: passwordMatchValidator })

  handleSubmit():void{
    console.log(this.registerform.value);
    console.log(this._AuthserviceService.setRegister(this.registerform.value));
    if(this.registerform.valid){
      this.isloading =true
      this._AuthserviceService.setRegister(this.registerform.value).subscribe({
        next: (response)=>{
          if(response.message == "succsess"){
            this.isloading =false
            this._Router.navigate(["/login"])
          }
          console.log(response);
        },
        error:(err:HttpErrorResponse)=> {
          console.log(err);
          this.isloading =false
          this.ErrMsg = err.error.message
          console.log(err.error.message);
        },
      })

    }
    

  }

}
