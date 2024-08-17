import { Injectable } from "@angular/core";



@Injectable({providedIn:'root'})
 export class GifsService{
    //Props
    private _tagHistory : string[] = [];

    //Constructor
    constructor(){}

    // Getters&Setters
    get tagHistory() {
        return [...this._tagHistory];
    }

    // Methods
    searchTag(tag : string) : void { 
        this._tagHistory.unshift(tag);
        console.log(this._tagHistory);
    }

 }