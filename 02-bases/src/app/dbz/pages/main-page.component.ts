import { Component } from "@angular/core";
import { Employ } from "../interfaces/employ.interface";


@Component( {
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
} )


export class MainPageComponent {

    public employees : Employ[]  = [{
        name: "Benjamin", legajo: 20002},
    {   name:"Micaela",legajo:20010},
    {name: "Ricardito", legajo:20011},
    {name: "Rockito", legajo:200014},

];

}
