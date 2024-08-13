import { Injectable } from "@angular/core";
import { Employ } from "../interfaces/employ.interface";
import {v4 as uuid} from "uuid";

@Injectable({providedIn: 'root'})


export class EmployeesService {
    public employees : Employ[] = [
        // {id:uuid(), nombre: "Benjamin", sector: "Administración", dni: 42536814},
        // {id:uuid(), nombre: "Usuario2", sector: "Caja", dni: 42452132},
        // {id:uuid(), nombre: "Usuario3", sector: "Vendedor", dni: 2528342},
        // {id:uuid(), nombre: "Usuario4", sector: "Repositor", dni: 2528342},
    
      ];
    
      addEmploy(employ : Employ ):void {

        const newEmploy : Employ = { id: uuid(), ...employ}
        this.employees.push(newEmploy);

      }
    
      // onDeleteEmploy(index : number){
      //   this.employees.splice(index, 1);
      // }
    
      deleteEmployById(id: string) {
         this.employees = this.employees.filter(employ => employ.id != id)
      }
}