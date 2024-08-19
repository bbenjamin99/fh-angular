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

    private organizeHistory(tag : string) : void{
      tag = tag.toLowerCase();

      if( this._tagHistory.includes(tag)) {
        this._tagHistory = this._tagHistory.filter( oldtag => oldtag !== tag)
      }

      this._tagHistory.unshift( tag );
      this._tagHistory = this._tagHistory.splice(0,10);
    }

    // Methods
    public searchTag(tag : string) : void {

        if(tag.length === 0)return;
        this.organizeHistory(tag);
    }

 }
