import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';

import { AddEmployComponent } from './components/add-employ/add-employ.component';
import { ListEmployeesComponent } from './components/list/list-employees.component';
import { FormsModule } from '@angular/forms';



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
    CommonModule,
    FormsModule
  ]
})
export class EmployeesModule { }
