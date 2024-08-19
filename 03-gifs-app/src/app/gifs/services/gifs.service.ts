import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable({providedIn:'root'})

 export class GifsService{
    //Props
    private _tagHistory : string[] = [];
    private apiKey :      string = 'QcDM9Cf3ClZ6uxuD10HfDPF40zftD2Ct';
    private serviceUrl :  string = 'https://api.giphy.com/v1/gifs';

    //Constructor
    constructor(private http : HttpClient){}

    // Getters&Setters
    get tagHistory() {
        return [...this._tagHistory];
    }

    // Methods
     searchTag(tag : string) : void { 
        this._tagHistory.unshift(tag);
        
        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', 10)
        .set('q', tag)

        this.http.get(`${this.serviceUrl}/search`, {params})
        .subscribe(resp => {
            console.log(resp);
            
        })
    }

 }