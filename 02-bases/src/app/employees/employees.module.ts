import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';

import { AddEmployComponent } from './components/add-employ/add-employ.component';
import { ListEmployeesComponent } from './components/list/list-employees.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListEmployeesComponent,
    AddEmployComponent
  ],
  exports: [
    MainPageComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
