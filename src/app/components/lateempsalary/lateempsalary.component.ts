import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAttendempsalary } from 'src/app/modules/iattendempsalary';
import { SalaryService } from 'src/app/shared/services/salary.service';

@Component({
  selector: 'app-lateempsalary',
  templateUrl: './lateempsalary.component.html',
  styleUrls: ['./lateempsalary.component.css']
})
export class LateempsalaryComponent {
  nationalid:string=""
  empname:string =""
  month:number =0;
  year:number = 0
  lateempsalary:IAttendempsalary[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute ,private _SalaryService:SalaryService){}

  ngOnInit(): void {
    this.nationalid=this._ActivatedRoute.snapshot.queryParams["ID"]
    this.empname=this._ActivatedRoute.snapshot.queryParams["name"]
    this.month=this._ActivatedRoute.snapshot.queryParams["month"]
    this.year=this._ActivatedRoute.snapshot.queryParams["year"]
    this.getattenempsalary()
    
  }

  getattenempsalary(){
    this._SalaryService.latesempwithsalary(this.nationalid,this.month,this.year).subscribe({
      next:(response)=> {
        console.log(response);
        this.lateempsalary=response
        console.log(this.lateempsalary);
      },error:(err)=> {
        console.log(err);

      },
    })

  }


}
