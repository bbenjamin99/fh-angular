import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListEmployeesComponent } from './components/list/list-employees.components';
import { AddEmployComponent } from './components/add-employ/add-employ.components';


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
