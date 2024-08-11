import { Component, Input } from "@angular/core";
import { Employ } from "../../interfaces/employ.interface";


@Component({
    selector:'list-employees',
    templateUrl:'./list-employees.component.html',
})


export class ListEmployeesComponent {

    @Input()
    public listEmployees : Employ[] = [{
      nombre: "Benjamin", sector: "Administración", dni: 42536814
    }];

}
