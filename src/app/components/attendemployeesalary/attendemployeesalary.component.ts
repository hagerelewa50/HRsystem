import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/shared/services/salary.service';
import { IAttendempsalary } from 'src/app/modules/iattendempsalary';

@Component({
  selector: 'app-attendemployeesalary',
  templateUrl: './attendemployeesalary.component.html',
  styleUrls: ['./attendemployeesalary.component.css']
})
export class AttendemployeesalaryComponent implements OnInit{
  nationalid:string=""
  empname:string =""
  month:number =0;
  year:number = 0
  attentempsalary:IAttendempsalary[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute ,private _SalaryService:SalaryService){}

  ngOnInit(): void {
    this.nationalid=this._ActivatedRoute.snapshot.queryParams["ID"]
    this.empname=this._ActivatedRoute.snapshot.queryParams["name"]
    this.month=this._ActivatedRoute.snapshot.queryParams["month"]
    this.year=this._ActivatedRoute.snapshot.queryParams["year"]
    this.getattenempsalary()
    
  }

  getattenempsalary(){
    this._SalaryService.attendsempwithsalary(this.nationalid,this.month,this.year).subscribe({
      next:(response)=> {
        console.log(response);
        this.attentempsalary=response
        console.log(this.attentempsalary);
        

      },error:(err)=> {
        console.log(err);

      },
    })

  }

}
