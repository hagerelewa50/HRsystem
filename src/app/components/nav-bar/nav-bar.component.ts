import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private _AuthserviceService:AuthserviceService){}
  logOutUser(){
   this._AuthserviceService.logOut()
  }

}
