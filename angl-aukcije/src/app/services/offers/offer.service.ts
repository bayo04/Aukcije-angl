import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from '../../models/Offer';
import { AppConfig } from '../../config/config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiPath: string;
  
  constructor(private http:HttpClient, private _appConfig:AppConfig) {
    this.apiPath=_appConfig.get("PathAPI")+"offer/";
   }

  getById(id: number){
    return this.http.get<Offer>(this.apiPath + id);
  }

  createOffer(offer: Offer){
    this.http.post(this.apiPath, offer).subscribe(s => console.log(s));
  }

  getAll(){
    return this.http.get<Offer>(this.apiPath);
  }
}
