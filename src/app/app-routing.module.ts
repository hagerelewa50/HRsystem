import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { PublicSettingsComponent } from './components/public-settings/public-settings.component';
import { DepartmentComponent } from './components/department/department.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
import { AddAttendanceComponent } from './components/add-attendance/add-attendance.component';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path:"",
  canActivate:[authGuard],
  component:BlanklayoutComponent ,
  children:[
    {path:"", redirectTo:"employees",pathMatch:"full"},
    {path:"employees", component:EmployeesComponent},
    {path:"addemloyee", component:AddEmployeeComponent},
    {path:"editemloyee", component:AddEmployeeComponent},
    {path:"department", component:DepartmentComponent},
    {path:"addDepart",component:AddDepartmentComponent},
    {path:"editDepart",component:AddDepartmentComponent},
    {path:"attendence", component:AttendanceComponent},
    {path:"vacation", component:VacationComponent},
    {path:"addHoliday",component:AddHolidayComponent},
    {path:"editHoliday",component:AddHolidayComponent},
    {path:"addAttendance",component:AddAttendanceComponent},
    {path:"editAttendance",component:AddAttendanceComponent},
    {path:"publicsetting", component:PublicSettingsComponent},
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
