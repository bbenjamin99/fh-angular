import { Component, EventEmitter, Output } from "@angular/core";
import { Employ } from "../../interfaces/employ.interface";



@Component({
    selector:'<add-employ>',
    templateUrl:'add-employ.component.html',
})


export class AddEmployComponent{

    @Output()
    public onNewEmploy : EventEmitter<Employ> = new EventEmitter();

    public employ : Employ = {
        nombre:"",
        sector: "",
        dni: 0,
    }   

    emitEmploy():void{
        if(this.employ.nombre.length === 0) return;

        this.onNewEmploy.emit(this.employ);
        
        this.employ = {nombre: '', sector: '', dni:0}
    }


}