import { Component } from "@angular/core";
import { Employ } from "../interfaces/employ.interface";


@Component( {
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
} )


export class MainPageComponent {
    
    public employees : Employ[]  = [{
        name: "Benjamin", id: 1},
    {   name:"Micaela",id:2},
    {name: "Ricardito", id:3},
    {name: "Rockito", id:4},

];
    
}