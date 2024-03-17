import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { PublicSettingsComponent } from './components/public-settings/public-settings.component';
import { EmployeeReportsComponent } from './components/employee-reports/employee-reports.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  { path:"",component:BlanklayoutComponent ,
  children:[
    {path:"", redirectTo:"employees",pathMatch:"full"},
    {path:"employees", component:EmployeesComponent},
    {path:"addemloyee", component:AddEmployeeComponent},
    {path:"attendence", component:AttendanceComponent},
    {path:"vacation", component:VacationComponent},
    {path:"publicsetting", component:PublicSettingsComponent},
    {path:"employeereports", component:EmployeeReportsComponent}
  ] },

  { path:"",
  component:AuthlayoutComponent ,
  children:[
    {path:"register" ,component:RegisterComponent},
    {path:"login" ,component:LoginComponent},
  ] },
  {path:"**" , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
