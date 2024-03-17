import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

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

    name:new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword:new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])

  })

  handleSubmit():void{

    console.log(this.registerform.value);
    console.log(this._AuthserviceService.setRegister(this.registerform.value));

    if(this.registerform.valid){
      this.isloading =true
      
      this._AuthserviceService.setRegister(this.registerform.value).subscribe({
        next: (response)=>{
         

          if(response.message == "success"){
            this.isloading =false
            this._Router.navigate(["/login"])
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
