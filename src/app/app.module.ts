import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService } from './employee/employee.service'
import {EmployeesComponent} from './employee/employees.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
