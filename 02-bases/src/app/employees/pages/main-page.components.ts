import { Component } from "@angular/core";
import { Employ } from "../interfaces/employ.interface";


@Component({
    selector:'app-employees-main-page',
    templateUrl: 'main-page.components.html'
})

export class MainPageComponent {

    public employees : Employ[] = [
    {nombre: "Benjamin", sector: "Administración", dni: 42536814},
    {nombre: "Usuario2", sector: "Caja", dni: 42452132},
    {nombre: "Usuario3", sector: "Vendedor", dni: 2528342},

  ];


}
