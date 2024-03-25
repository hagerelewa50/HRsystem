import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { PublicSettingsComponent } from './components/public-settings/public-settings.component';
import { DepartmentComponent} from './components/department/department.component';
import { NavauthComponent } from './components/navauth/navauth.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { RouterModule } from '@angular/router';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
import { AddAttendanceComponent } from './components/add-attendance/add-attendance.component';
// import {  MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    EmployeesComponent,
    AttendanceComponent,
    VacationComponent,
    PublicSettingsComponent,
    DepartmentComponent,
    NavauthComponent,
    BlanklayoutComponent,
    AuthlayoutComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    AddHolidayComponent,
    AddAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule ,
    MatPaginatorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    FormsModule
 
          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
