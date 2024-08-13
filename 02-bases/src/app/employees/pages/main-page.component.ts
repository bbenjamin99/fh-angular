import { Component } from "@angular/core";
import { EmployeesService } from "../services/employees.service";
import { Employ } from "../interfaces/employ.interface";


@Component({
    selector:'app-employees-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor( private employeesServices : EmployeesService){
  }
  
  get employees() : Employ[] {
    return [...this.employeesServices.employees];
  }

  onDeleteEmploy(id : string):void {
    this.employeesServices.deleteEmployById(id);
  }

  onNewEmploy(employ : Employ): void{
    this.employeesServices.addEmploy(employ);
  }


} 
