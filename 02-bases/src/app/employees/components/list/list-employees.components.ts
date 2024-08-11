import { Component, Input } from "@angular/core";
import { Employ } from "../../interfaces/employ.interface";


@Component({
    selector:'list-employees',
    templateUrl:'./list-employees.components.html',
})


export class ListEmployeesComponent {
    @Input()
    public listEmployees : Employ[] = [{
      nombre: "Benjamin", sector: "Administración", dni: 42536814
    }];

}
