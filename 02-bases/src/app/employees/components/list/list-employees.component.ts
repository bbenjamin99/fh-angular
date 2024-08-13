import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employ } from "../../interfaces/employ.interface";
import { EmployeesService } from "../../services/employees.service";


@Component({
    selector:'list-employees',
    templateUrl:'./list-employees.component.html',
})


export class ListEmployeesComponent {

    @Input()
    public listEmployees : Employ[] = [{
      nombre: "Benjamin", sector: "Administración", dni: 42536814
    }];

    @Output()
    public onDelete : EventEmitter<string> = new EventEmitter();
    
    deleteEmployById(id? : string):void {
      if(!id)return;
      //TODO: Emitir el ID del empleado
        this.onDelete.emit(id);

    }

    public noHayResultado(): boolean{
      if(this.listEmployees.length =0) {
        return true;
      } else {
         return false;
      }
    }

}
