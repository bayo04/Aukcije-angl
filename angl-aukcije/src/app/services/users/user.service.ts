import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../config/config';
import { User } from '../../models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiPath: string;
  
  constructor(private http:HttpClient, private _appConfig:AppConfig) {
    this.apiPath=_appConfig.get("PathAPI")+"user/";
   }

  // getById(id: number){
  //   return this.http.get<Bid>(this.apiPath + id);
  // }

  // createOffer(bid: Bid){
  //   this.http.post(this.apiPath, bid).subscribe(s => console.log(s));
  // }

  // getAll(){
  //   return this.http.get<Bid>(this.apiPath);
  // }

  register(user: User){
    this.http.post(this.apiPath, user).subscribe(s => console.log(s));
  }
}
